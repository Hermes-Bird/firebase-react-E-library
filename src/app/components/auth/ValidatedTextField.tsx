import React from 'react'
import {FieldAttributes, useField} from 'formik'
import {TextField, TextFieldProps} from '@material-ui/core'
import { IFormValues } from '../../models/User'

export interface IErrorValues {
    email?: string
    password?: string
    userName?: string
}


export const ValidatedTextField: React.FC<FieldAttributes<{} | TextFieldProps>> = (props:any) => {
    const [field, meta] = useField(props)
    const styles = {marginBottom: '15px'}
    const errorText = meta.error && meta.touched ? meta.error : ''
    return <TextField {...field} {...props} style={styles} error={!!errorText} helperText={errorText}/>
}

interface IErrorMessage {
    message: string
}



export const validate = ({email, password, userName} : IFormValues, serverError : IErrorMessage): (IErrorValues | {}) => {
    const errors: IErrorValues = {}
    console.log('Server error', serverError)
    if(serverError.message){
        errors.email = serverError.message
        serverError.message = ''
    } else if(!email) {
        errors.email = 'Email is required'
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        errors.email = 'Invalid email'
    }

    if(!password) {
        errors.password = 'Password is required'
    }else if(password.length < 6) {
        errors.password = 'Password should be at least 6 characters'
    }

    if(typeof userName === 'string' && !userName) {
        errors.userName = 'User name is required'
    } else if (typeof userName === 'string' && userName.length < 3) {
        errors.userName = 'User name should be at least 3 characters'
    }

    console.log(errors)
    return errors
}
