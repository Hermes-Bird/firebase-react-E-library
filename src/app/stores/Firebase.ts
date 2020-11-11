import firebase from 'firebase'
import {userConverter} from '../models/converters'
import {IProfileFormValues, ISignInValues, ISignUpValues, IUser} from '../models/User'
import {IBookFormValues} from '../validation/bookValidation'
import {IBook, Rating} from '../models/Book'

window.firebase = firebase as any

const STANDART__AVATAR_URL: string =
    'https://sun9-64.userapi.com/awS1t-56Yt1T98VXOi-blwmmtCm4JLj1sh9zfA/Xjcz51hjws0.jpg'

const config = {
    apiKey: 'AIzaSyBFwBCOWeCpKbmJ0pBYvm5cHLa6PNtJbMA',
    authDomain: 'el-library.firebaseapp.com',
    databaseURL: 'https://el-library.firebaseio.com',
    projectId: 'el-library',
    storageBucket: 'el-library.appspot.com',
    messagingSenderId: '499414996477',
    appId: '1:499414996477:web:7f11f9b5e0a85d1725b594',
    measurementId: 'G-KL38RV8JJP'
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
                markedAsRead: [],
                ratedBooks: []
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
            imageUrl: !imageIsFile ? image as string : '',
            rating: Rating.notRated,
            title: bookFormValues.title,
            description: bookFormValues.description,
            author: bookFormValues.author,
            publicationYear: bookFormValues.publicationYear,
            pdfUrl: '',
            comments: []
        }

        console.log(pdf)

        const newBookRef = await this.db.collection('books').add(newBook)

        const pdfRef = await this.pdfStorage.child(`${newBookRef.id}.pdf`)
        const imgRef = await this.bookImageStorage.child(`${newBookRef.id}.jpg`)

        await pdfRef.put(pdf, {
            contentType: 'application/pdf'
        })
        const pdfUrl = await pdfRef.getDownloadURL()

        let imageUrl
        if (imageIsFile) {
            await imgRef.put(image as File)
            imageUrl = await imgRef.getDownloadURL()
        } else imageUrl = image

        await newBookRef.update({imageUrl, pdfUrl})
    }

}

export const firebaseAgent = new FirebaseAgent()
