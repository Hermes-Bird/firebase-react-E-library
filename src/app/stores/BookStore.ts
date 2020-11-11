import {action, makeObservable, observable} from 'mobx'
import {IBook, Rating} from '../models/Book'
import {IBookFormValues} from '../validation/bookValidation'
import {firebaseAgent} from './Firebase'
import {CollectionNames} from '../models/User'

const defaultBookImage = 'https://wallbox.ru/resize/1280x800/wallpapers/main/201341/anime-books-girl-06f8191.jpg'

export class BookStore {
    @observable currentBook: IBook | null
    @observable tempImageUrl: string
    @observable books: IBook[]
    @observable searchedBooks: IBook[]
    @observable tempPdfFile: File | null
    @observable profileFavoriteBooks: IBook[]
    @observable profileReadBooks: IBook[]

    private tempImageFile: File | string


    constructor() {
        makeObservable(this)
        this.books = []
        this.currentBook = null
        this.tempImageUrl = defaultBookImage
        this.tempImageFile = defaultBookImage
        this.tempPdfFile = null
        this.searchedBooks = []
        this.profileFavoriteBooks = []
        this.profileReadBooks = []
    }

    @action uploadTempBookImage = async (image: File) => {
        this.tempImageFile = image
        const newImageUrl = await firebaseAgent.uploadTempBookImage(image)
        this.tempImageUrl = newImageUrl || defaultBookImage
        return newImageUrl || defaultBookImage
    }

    @action uploadPdf = (pdf: File) => this.tempPdfFile = pdf
    @action setDefaultImage = () => this.tempImageUrl = defaultBookImage


    @action createNewBook = async (bookFormValues: IBookFormValues) => {
        await firebaseAgent.createBook(bookFormValues, this.tempImageFile, this.tempPdfFile as File)
        this.clearTemp()
    }

    @action fetchBooks = async () => {
        this.books = await firebaseAgent.fetchBooks()
        this.searchBooks('')
    }

    @action updateBookById = async (bookFormValues: IBookFormValues, id: string) => {
        if (this.currentBook) {
            const image = typeof this.tempImageFile === 'string' ? this.currentBook.imageUrl : this.tempImageFile
            await firebaseAgent.updateBook(id, bookFormValues, image, this.tempPdfFile)
            this.clearTemp()
        }
    }

    @action fetchBookById = async (id: string) => {
        this.currentBook = await firebaseAgent.fetchBookById(id)
        return this.currentBook
    }

    @action clearTemp = () => {
        this.tempPdfFile = null
        this.tempImageFile = defaultBookImage
        this.tempImageUrl = defaultBookImage
    }

    @action setCurrentBookRating = async (rating: Rating) => {
        if (this.currentBook) {
            this.currentBook = await firebaseAgent.addBookRate(rating, this.currentBook.id) || null
        }
    }

    @action searchBooks = (query: string) => {
        if(this.books && query) {
            query = query.toLowerCase()
            this.searchedBooks = this.books.filter(book => {
                const author = book.author.toLowerCase()
                const title = book.title.toLowerCase()
                console.log(author, title, query)
                if (title.includes(query) || query.includes(title)) return true
                return author.includes(query) || query.includes(author)
            })
            console.log([...this.searchedBooks])
        } else this.searchedBooks = this.books
    }

    @action getBooksFromCollection = async (collection: string[], collectionName: CollectionNames) => {
        if (collection.length > 0) {
            this.books = await firebaseAgent.fetchBooks()
            const bookCollection = this.books.filter(book => collection.includes(book.id))
            if (collectionName === CollectionNames.favorite) {
                this.profileFavoriteBooks = bookCollection
            } else {
                this.profileReadBooks = bookCollection
            }
        }
    }

    @action deleteBookById = async (id: string) => {
        await firebaseAgent.deleteBookById(id)
    }
}