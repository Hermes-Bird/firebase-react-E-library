export interface IUser {
    id: string
    email: string
    userName: string
    imageUrl: string
    isAdmin: boolean
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


export interface IFormValues extends ISignInValues {
    userName?: string
}