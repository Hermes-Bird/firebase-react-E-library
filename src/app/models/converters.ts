import firebase from 'firebase'
import { IUser } from './User'
import {IComment} from './Comment'
import {IBook, Rating} from './Book'

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
            isAdmin: data.isAdmin,
            favorite: data.favorite,
            markedAsRead: data.markedAsRead,
            ratedBooks: data.ratedBooks
        }
    }
}

export const commentConverter: firebase.firestore.FirestoreDataConverter<IComment> = {
    toFirestore(modelObject: IComment): firebase.firestore.DocumentData {
        return {... modelObject}
    },

    fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): IComment {
        const data = snapshot.data(options)
        return {
            id: data.id,
            bookId: data.bookId,
            userAvatarUrl: data.userAvatarUrl,
            text: data.text
        }
    }
}

export const bookConverter: firebase.firestore.FirestoreDataConverter<IBook> = {
    toFirestore(modelObject: IBook): firebase.firestore.DocumentData {
        return {...modelObject}
    },

    fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): IBook {
        const data = snapshot.data(options)
        return {
            imageUrl: data.imageUrl,
            rating: data.rating,
            title: data.title,
            description: data.description,
            author: data.author,
            publicationYear: data.publicationYear,
            pdfUrl: data.pdfUrl,
            comments: data.comments,
        }
    }
}