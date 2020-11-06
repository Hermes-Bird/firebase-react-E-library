import {FieldAttributes, FieldProps, useField} from 'formik'
import React from 'react'
import {TextField, TextFieldProps} from '@material-ui/core'
import {IFormValues} from './UserForm'

export interface IErrorValues {
    email: string
    password: string
    repeatedPassword: string
}


export const ValidatedTextField: React.FC<FieldAttributes<{} | TextFieldProps>> = (props:any) => {
    const [field, meta] = useField(props)
    const styles = {marginBottom: '15px'}
    const errorText = meta.error && meta.touched ? meta.error : ''
    return <TextField {...field} {...props} style={styles} error={!!errorText} helperText={errorText}/>
}



export const validate = ({email, password, repeatedPassword} : IFormValues): IErrorValues => {
    const errors: IErrorValues= {
        email: '',
        password: '',
        repeatedPassword: ''
    }

    if(!email) {
        errors.email = 'Email is required'
    }else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        errors.email = 'Invalid email'
    }

    if(!password) {
        errors.password = 'Password is required'
    }else if(password.length < 6) {
        errors.password = 'Password should be at least 6 characters'
    }

    if(repeatedPassword !== undefined && !repeatedPassword) {
        errors.repeatedPassword = 'Please repeat your password'
    }else if (repeatedPassword !== undefined && password !== repeatedPassword) {
        errors.repeatedPassword = 'Passwords are not equal'
    }

    return errors
}
