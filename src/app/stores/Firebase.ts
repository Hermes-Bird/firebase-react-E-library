import firebase from 'firebase'
import {bookConverter, userConverter} from '../models/converters'
import {CollectionNames, IProfileFormValues, ISignInValues, ISignUpValues, IUser} from '../models/User'
import {IBookFormValues} from '../validation/bookValidation'
import {IBook, Rating} from '../models/Book'
import {calculateRating} from '../helpers/helper'

const STANDART__AVATAR_URL: string =
    'https://ru.myanimeshelf.com/upload/dynamic/2016-05/28/Amashiro-Natsuki-Anime-Original-Anime-Art-Anime-23671211.png'

const config = {
    apiKey: "AIzaSyBQzrcO2XW59delXm53N0jnyFL6nLxZD-c",
    authDomain: "e-library-56f7c.firebaseapp.com",
    databaseURL: "https://e-library-56f7c.firebaseio.com",
    projectId: "e-library-56f7c",
    storageBucket: "e-library-56f7c.appspot.com",
    messagingSenderId: "312837227315",
    appId: "1:312837227315:web:e26fdb4e757d870033b446",
    measurementId: "G-SE2EEMW8YD"
}

class FirebaseAgent {
    private auth: firebase.auth.Auth
    private db: firebase.firestore.Firestore
    private userStorage: firebase.storage.Reference
    private tempStorage: firebase.storage.Reference
    private pdfStorage: firebase.storage.Reference
    private bookImageStorage: firebase.storage.Reference

    constructor() {
        firebase.initializeApp(config)
        this.auth = firebase.auth()
        this.db = firebase.firestore()
        this.userStorage = firebase.storage().ref('users/')
        this.tempStorage = firebase.storage().ref('temp/')
        this.pdfStorage = firebase.storage().ref('books/pdf/')
        this.bookImageStorage = firebase.storage().ref('books/images/')
    }

    async signUpWithEmail({email, password, userName}: ISignUpValues): Promise<IUser | null> {
        const {user} = await this.auth.createUserWithEmailAndPassword(
            email,
            password
        )

        if (user) {
            const userData: IUser = {
                email,
                userName,
                id: user.uid,
                isAdmin: false,
                imageUrl: STANDART__AVATAR_URL,
                favorite: [],
                markedAsRead: []
            }

            await this.db
                .collection('users')
                .withConverter(userConverter)
                .doc(user.uid)
                .set(userData)

            return userData
        }

        return null
    }

    async signInWithEmail({email, password}: ISignInValues): Promise<IUser | null> {
        await this.auth.signInWithEmailAndPassword(email, password)
        return await this.getCurrentUser()
    }

    async getCurrentUser(): Promise<IUser | null> {
        const currentUser = this.auth.currentUser
        if (!currentUser) return null

        const userSnapshot = await this.db
            .collection('users')
            .withConverter(userConverter)
            .doc(currentUser.uid)
            .get()

        const userData = userSnapshot.data()

        return userData || null
    }

    async userSignOut(): Promise<any> {
        await this.auth.signOut()
    }

    async updateEmailAndName({email, userName}: IProfileFormValues): Promise<any> {
        const user = this.auth.currentUser
        if (user) {
            await user.updateEmail(email)
            await this.db
                .collection('users')
                .doc(user.uid)
                .update({email, userName})
        }
    }

    async uploadUserImage (image: File): Promise<string | null> {
        const user = this.auth.currentUser
        if (user) {
            try {
                const imageRef = this.userStorage.child(`${user.uid}.jpg`)

                await imageRef.put(image)
                const downloadUrl = await imageRef.getDownloadURL()

                await this.db
                    .collection('users')
                    .doc(user.uid)
                    .update({imageUrl: downloadUrl})

                return downloadUrl
            } catch (err) {
                return null
            }
        }
        return null
    }

    async uploadTempBookImage(image: File): Promise<string|null> {
        try {
            const imageRef = this.tempStorage.child('temp.jpg')

            await imageRef.put(image)
            return await imageRef.getDownloadURL()
        } catch (err) {
            console.log(err)
            return null
        }
    }

    async createBook(bookFormValues: IBookFormValues, image: File | string, pdf: File) {
        const imageIsFile = typeof image !== 'string'
        const newBook: IBook = {
            id: '',
            imageUrl: !imageIsFile ? image as string : '',
            rating: Rating.notRated,
            ratings: {},
            title: bookFormValues.title,
            description: bookFormValues.description,
            author: bookFormValues.author,
            publicationYear: bookFormValues.publicationYear,
            pdfUrl: '',
            comments: []
        }

        const newBookRef = await this.db.collection('books').add(newBook)
        const {id} = newBookRef

        const pdfRef = await this.pdfStorage.child(`${id}.pdf`)

        await pdfRef.put(pdf, {contentType: 'application/pdf'})
        const pdfUrl = await pdfRef.getDownloadURL()

        let imageUrl
        if (imageIsFile) {
            const imgRef = await this.bookImageStorage.child(`${id}.jpg`)
            await imgRef.put(image as File)
            imageUrl = await imgRef.getDownloadURL()
        } else imageUrl = image

        await newBookRef.update({imageUrl, pdfUrl, id})
    }

    async fetchBooks(): Promise<IBook[]> {
        const booksArray: IBook[] = []
        const booksSnapshot = await this.db
                .collection('books')
                .withConverter(bookConverter)
                .get()

        booksSnapshot.forEach(bookSnap => booksArray.push(bookSnap.data()))

        return booksArray
    }

    async fetchBookById(id: string): Promise<IBook | null> {
        const bookSnapshot = await this.db
            .collection('books')
            .withConverter(bookConverter)
            .doc(id)
            .get()

        return bookSnapshot.data() || null
    }

    async addBookRate(rate: Rating, bookId: string) {
        const bookRef = this.db
            .collection('books')
            .withConverter(bookConverter)
            .doc(bookId)

        const userId = this.auth.currentUser?.uid

        const bookState = (await bookRef.get()).data()
        if(bookState && userId && rate !== Rating.notRated) {
            bookState.ratings[userId] = rate
            bookState.rating = calculateRating(bookState.ratings)

            await bookRef.set({...bookState})
            return bookState
        }
    }

    async addToBookToUserCollection(bookId: string, collectionName: CollectionNames) {
        const userId = this.auth.currentUser?.uid
        const user = await this.getCurrentUser()

        if (userId && user) {
            user[collectionName].push(bookId)
            await this.db
                .collection('users')
                .withConverter(userConverter)
                .doc(userId)
                .set(user)
            return user
        }
    }

    async removeBookFromCollection(bookId: string, collectionName: CollectionNames) {
        const userId = this.auth.currentUser?.uid
        const user = await this.getCurrentUser()

        if (userId && user) {
            user[collectionName] = user[collectionName].filter((book) => book !== bookId)
            await this.db
                .collection('users')
                .withConverter(userConverter)
                .doc(userId)
                .set(user)
            console.log(user)
            return user
        }
    }

    async updateBook(id: string, bookFormValues: IBookFormValues, image: File | string, pdf: File | null) {
        const bookRef = this.db
            .collection('books')
            .withConverter(bookConverter)
            .doc(id)

        let pdfUrl = !pdf ? bookFormValues.pdfFile : ''

        if (!pdfUrl && pdf) {
            const pdfRef = await this
                            .pdfStorage
                            .child(`${id}.pdf`)
            await pdfRef.put(pdf, {contentType: 'application/pdf'})
            pdfUrl = await pdfRef.getDownloadURL()
        }

        let imageUrl = typeof image === 'string' ? image : ''
        if (!imageUrl) {
            const imgRef = await this.bookImageStorage.child(`${id}.jpg`)
            await imgRef.put(image as File)
            imageUrl = await imgRef.getDownloadURL()
        }

        await bookRef.update({
            ...bookFormValues,
            imageUrl,
            pdfUrl
        })
    }

    async deleteBookById(id: string) {
        await this.db
                .collection('books')
                .doc(id)
                .delete()

        await this.pdfStorage
            .child(`${id}.pdf`)
            .delete()

        await this.bookImageStorage
            .child(`${id}.jpg`)
            .delete()
    }
}

export const firebaseAgent = new FirebaseAgent()
