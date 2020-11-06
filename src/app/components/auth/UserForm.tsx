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
    repeatedPassword?: string
}

const UserForm: React.FC<IUserFormProps> = ({onSubmit, isLoginForm}) => {
    const initialValues: IFormValues = {email: '', password: ''}
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
                        <FormControl fullWidth>
                            <ValidatedTextField
                                variant="outlined"
                                label="Email"
                                type="email"
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
                        {
                            isLoginForm ?
                                <FormControl fullWidth>
                                    <ValidatedTextField
                                        variant="outlined"
                                        label="Repeat password"
                                        type="password"
                                        name="repeatedPassword"
                                        as={TextField}
                                    />
                                </FormControl>
                                : null
                        }
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