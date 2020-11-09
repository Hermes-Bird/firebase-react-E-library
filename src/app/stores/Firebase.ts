import firebase from 'firebase'
import { userConverter } from '../models/converters'
import { ISignInValues, ISignUpValues, IUser } from '../models/User'

window.firebase = firebase as any

const STANDART__AVATAR_URL: string =
    'https://www.wallpapermaiden.com/wallpaper/37773/download/1920x1080/anime-girl-smartphone-talking-bandage-anime.jpeg'

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

    constructor() {
        firebase.initializeApp(config)
        this.auth = firebase.auth()
        this.db = firebase.firestore()
    }

    async signUpWithEmail({
        email,
        password,
        userName
    }: ISignUpValues): Promise<IUser | null> {
        const { user } = await this.auth.createUserWithEmailAndPassword(
            email,
            password
        )

        if (user) {
            const userData: IUser = {
                email,
                userName,
                id: user.uid,
                isAdmin: false,
                imageUrl: STANDART__AVATAR_URL
            }

            this.db
                .collection('users')
                .withConverter(userConverter)
                .doc(user.uid)
                .set(userData)

            return userData
        }

        return null
    }

    async signInWithEmail({
        email,
        password
    }: ISignInValues): Promise<IUser | null> {
        await this.auth.signInWithEmailAndPassword(email, password)
        return await this.getCurrentUser()
    }

    async getCurrentUser(): Promise<IUser | null> {
        const currentUser = this.auth.currentUser
        console.log(currentUser)
        if (!currentUser) return null

        const userSnapshot = await this.db
            .collection('users')
            .withConverter(userConverter)
            .doc(currentUser.uid)
            .get()

        const userData = userSnapshot.data()

        console.log(userData)
        return userData || null
    }

    async userSignOut(): Promise<any> {
        firebase.auth().signOut()
    }
}

export const firebaseAgent = new FirebaseAgent()
