import React from 'react'
import {FieldAttributes, useField} from 'formik'
import {TextField, TextFieldProps} from '@material-ui/core'


export const ValidatedTextField: React.FC<FieldAttributes<{} | TextFieldProps>> = (props:any) => {
    const [field, meta] = useField(props)
    const styles = {marginBottom: '15px'}
    const errorText = meta.error && meta.touched ? meta.error : ''
    return <TextField {...field} {...props} style={styles} error={!!errorText} helperText={errorText}/>
}


