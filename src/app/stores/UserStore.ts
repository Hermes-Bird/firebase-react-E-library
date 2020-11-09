import { action, makeObservable, observable } from "mobx";
import { ISignInValues, ISignUpValues, IUser } from "../models/User";
import { firebaseAgent } from "./Firebase";



export class UserStore {
    @observable user: IUser | null 

    constructor() {
        makeObservable(this)
        this.user = null
        firebaseAgent.getCurrentUser().then(user => this.user = user)
    }

    @action getUser = async () => {
        this.user = await firebaseAgent.getCurrentUser() 
    }

    @action signOut = () => {
        console.log('I try sign Out')
        firebaseAgent.userSignOut()
    }

    @action signIn = async (signInValues: ISignInValues) => {
        console.log(signInValues)
        this.user = await firebaseAgent.signInWithEmail(signInValues)
    }

    @action signUp = async(signUpValues: ISignUpValues) => {
        console.log(signUpValues)
        this.user = await firebaseAgent.signUpWithEmail(signUpValues)
    }
}