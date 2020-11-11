import { action, makeObservable, observable } from 'mobx'
import {CollectionNames, IProfileFormValues, ISignInValues, ISignUpValues, IUser} from '../models/User'
import { firebaseAgent } from './Firebase'

export class UserStore {
    @observable user: IUser | null

    constructor() {
        makeObservable(this)
        this.user = null
    }

    @action getUser = async () => {
        this.user = await firebaseAgent.getCurrentUser()
    }

    @action signOut = async () => {
        await firebaseAgent.userSignOut()
    }

    @action signIn = async (signInValues: ISignInValues) => {
        await firebaseAgent.signInWithEmail(signInValues)
    }

    @action signUp = async (signUpValues: ISignUpValues) => {
        await firebaseAgent.signUpWithEmail(signUpValues)
    }

    @action updateUserNameAndEmail = (profileValues: IProfileFormValues) => {
        return firebaseAgent.updateEmailAndName(profileValues)
            .then(() => {
                if (this.user) {
                    this.user.email = profileValues.email
                    this.user.userName = profileValues.userName
                }
            })
    }

    @action uploadUserImage = async (image: File) => {
        if (this.user) {
            this.user.imageUrl = await firebaseAgent.uploadUserImage(image) || this.user.imageUrl
        }
    }

    @action addBookToCollection = async (bookId: string | null, collectionName: CollectionNames) => {
        if (bookId && this.user && !this.user[collectionName].includes(bookId)) {
            this.user = await firebaseAgent.addToBookToUserCollection(bookId, collectionName) || null
        }
    }

    @action removeBookFromCollection = async (bookId: string, collectionName: CollectionNames) => {
        if (this.user && this.user[collectionName].includes(bookId)) {
            this.user = await firebaseAgent.removeBookFromCollection(bookId, collectionName) || null
        }
    }
}
