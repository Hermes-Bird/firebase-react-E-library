import { IAuthFormValues } from '../models/User'

export interface IAuthErrorValues {
    email?: string
    password?: string
    userName?: string
    repeatedPassword?: string
}

export const authValidate = ({
    email,
    password,
    userName,
    repeatedPassword
}: IAuthFormValues): IAuthErrorValues | {} => {
    const errors: IAuthErrorValues = {}

    if (!email) {
        errors.email = 'Email is required'
    } else if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            email
        )
    ) {
        errors.email = 'Invalid email'
    }

    if (!password) {
        errors.password = 'Password is required'
    } else if (password.length < 6) {
        errors.password = 'Password should be at least 6 characters'
    }

    if (typeof userName === 'string' && !userName) {
        errors.userName = 'User name is required'
    } else if (typeof userName === 'string' && userName.length < 3) {
        errors.userName = 'User name should be at least 3 characters'
    }

    if (typeof repeatedPassword === 'string' && !repeatedPassword) {
        errors.repeatedPassword = "Repeate you're password"
    } else if (typeof userName === 'string' && password !== repeatedPassword) {
        errors.repeatedPassword = 'Passwords are not equal'
    }

    return errors
}
