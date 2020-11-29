import React from 'react'
import { Form, Formik } from 'formik'
import { ValidatedTextField } from '../auth/ValidatedTextField'
import { Button, FormControl, TextField } from '@material-ui/core'
import { ISignUpValues } from '../../models/User'
import {authValidate} from '../../validation/authValidation'

interface ISignUpFormProps {
    onSubmit: (data: ISignUpValues) => Promise<void>
}

const SignUpForm: React.FC<ISignUpFormProps> = ({ onSubmit }) => {
    const initialValues = {
        email: '',
        password: '',
        userName: '',
        repeatedPassword: ''
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(data: ISignUpValues, {
                setFieldError,
                setSubmitting,
                setErrors
            }) =>  {
                setSubmitting(true)
                onSubmit(data)
                    .then()
                    .catch(err => {
                        setFieldError('email', 'Email is already used by another account')
                        setErrors({email: 'Email is already used by another account'})
                    })
                    .finally(() => setSubmitting(false))
            }}
            validate={(values) => authValidate(values)}
        >
            {({ isSubmitting }) => (
                <Form>
                    <FormControl fullWidth>
                        <ValidatedTextField
                            variant="outlined"
                            label="User name"
                            type="text"
                            name="userName"
                            as={TextField}
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <ValidatedTextField
                            variant="outlined"
                            label="Email"
                            type="text"
                            name="email"
                            as={TextField}
                            error
                        />
                    </FormControl>
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
                        <ValidatedTextField
                            variant="outlined"
                            label="Repeate you're password"
                            type="password"
                            name="repeatedPassword"
                            as={TextField}
                        />
                    </FormControl>

                    <FormControl fullWidth>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Submit
                        </Button>
                    </FormControl>
                    {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
                </Form>
            )}
        </Formik>
    )
}

export default SignUpForm
