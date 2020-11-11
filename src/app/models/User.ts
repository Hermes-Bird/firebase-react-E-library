import {Rating} from './Book'

export interface IUser {
    id: string
    email: string
    userName: string
    imageUrl: string
    isAdmin: boolean
    favorite: string[]
    markedAsRead: string[]
}

export interface RatedBooks {
    [id: string] : Rating
}

export interface ISignInValues {
    email: string
    password: string,
}

export interface ISignUpValues {
    email: string
    password: string,
    userName: string
}


export interface IAuthFormValues extends ISignInValues {
    userName?: string
}

export interface IProfileFormValues {
    userName: string
    email: string
}

export enum CollectionNames {
    markedAsRead = 'markedAsRead',
    favorite = 'favorite'
}