import firebase from 'firebase'
import { IUser } from './User'

export const userConverter: firebase.firestore.FirestoreDataConverter<IUser> = {
    toFirestore(user: IUser): firebase.firestore.DocumentData {
        return { ...user }
    },
    fromFirestore(
        snapshot: firebase.firestore.QueryDocumentSnapshot,
        options: firebase.firestore.SnapshotOptions
    ): IUser {
        const data = snapshot.data(options)
        return {
            id: data.id,
            email: data.email,
            userName: data.userName,
            imageUrl: data.imageUrl,
            isAdmin: data.isAdmin
        }
    }
}
