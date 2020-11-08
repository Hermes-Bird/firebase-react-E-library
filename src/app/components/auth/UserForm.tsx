import React from 'react'
import {Form, Formik, FormikValues} from 'formik'
import {validate, ValidatedTextField} from './ValidatedTextField'
import {Button, FormControl, TextField} from '@material-ui/core'

interface IUserFormProps {
    onSubmit: (data: FormikValues) => void
    isLoginForm: boolean
}

export interface IFormValues {
    email: string
    password: string,
    userName?: string
}

const UserForm: React.FC<IUserFormProps> = ({onSubmit, isLoginForm}) => {
    const initialValues: IFormValues = {email: '', password: '', userName: isLoginForm ? undefined : ''}
    return (
            <Formik
                initialValues={initialValues}
                onSubmit={(data: FormikValues) => {
                    console.log(data)
                    onSubmit(data)
                }}
                validate={validate}
            >
                {({
                      values,
                      handleChange,
                      handleBlur,
                      handleSubmit
                  }) => (
                    <Form>
                        {
                            !isLoginForm ?
                                <FormControl fullWidth>
                                    <ValidatedTextField
                                        variant="outlined"
                                        label="User name"
                                        type="text"
                                        name="userName"
                                        as={TextField}
                                    />
                                </FormControl>
                                : null
                        }
                        <FormControl fullWidth>
                            <ValidatedTextField
                                variant="outlined"
                                label="Email"
                                type="text"
                                name="email"
                                as={TextField}
                                error
                            />
                        </FormControl >
                        <FormControl fullWidth>
                            <ValidatedTextField
                                variant="outlined"
                                label="Password"
                                type="password"
                                name="password"
                                as={TextField}
                            />
                        </FormControl>
                        
                        <FormControl fullWidth>
                            <Button variant="contained" color="primary" type="submit">Submit</Button>
                        </FormControl>
                        {/*<pre>{JSON.stringify(values, null, 2)}</pre>*/}
                    </Form>
                )}
            </Formik>
    )
}

export default UserForm