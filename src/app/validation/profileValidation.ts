import {IProfileFormValues} from '../models/User'

export interface IProfileErrorValues {
    email?: string
    userName?: string
}


export const profileValidate = ({email, userName}: IProfileFormValues): (IProfileErrorValues | {}) => {
    const errors: IProfileErrorValues = {}

    if (!email) {
        errors.email = 'Email is required'
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        errors.email = 'Invalid email'
    }

    if (!userName) {
        errors.userName = 'User name is required'
    } else if (userName.length < 3) {
        errors.userName = 'User name should be at least 3 characters'
    }

    return errors
}