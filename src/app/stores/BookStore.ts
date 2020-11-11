import {action, makeObservable, observable} from 'mobx'
import {IBook} from '../models/Book'
import {IBookFormValues} from '../validation/bookValidation'
import {firebaseAgent} from './Firebase'

const defaultBookImage = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b925e785-3e47-42c3-8110-f2743254296d/daib59s-fc93fa6e-1b1f-4f46-acae-384046c56002.png/v1/fill/w_750,h_1000,q_80,strp/loli_jotaro_by_krokobyaka_daib59s-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMDAwIiwicGF0aCI6IlwvZlwvYjkyNWU3ODUtM2U0Ny00MmMzLTgxMTAtZjI3NDMyNTQyOTZkXC9kYWliNTlzLWZjOTNmYTZlLTFiMWYtNGY0Ni1hY2FlLTM4NDA0NmM1NjAwMi5wbmciLCJ3aWR0aCI6Ijw9NzUwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.-sQ2msE-sV5oOwbp6gR3zr4VLMmqWLQd30wYBNNekqY'


export class BookStore {
    @observable currentBook: IBook | null
    @observable tempImageUrl: string
    private tempImageFile: File | string
    private tempPdfFile: File | null

    constructor() {
        makeObservable(this)
        this.currentBook = null
        this.tempImageUrl = defaultBookImage
        this.tempImageFile = defaultBookImage
        this.tempPdfFile = null
    }

    @action uploadTempBookImage = async (image: File) => {
        this.tempImageFile = image
        const newImageUrl = await firebaseAgent.uploadTempBookImage(image)
        this.tempImageUrl = newImageUrl || defaultBookImage
    }

    @action uploadPdf = (pdf: File) => {
        this.tempPdfFile = pdf
    }

    @action setDefaultImage = () => this.tempImageUrl = defaultBookImage

    @action createNewBook = async (bookFormValues: IBookFormValues) => {
        await firebaseAgent.createBook(bookFormValues, this.tempImageFile, this.tempPdfFile as File)
    }
}