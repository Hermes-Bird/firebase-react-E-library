import React from 'react'
import { Form, Formik } from 'formik'
import { validate, ValidatedTextField } from '../auth/ValidatedTextField'
import { Button, FormControl, TextField } from '@material-ui/core'
import { ISignUpValues } from '../../models/User'

interface ISignUpFormProps {
    onSubmit: (data: ISignUpValues) => Promise<void>
}


const error = {
    message: ''
}

const SignUpForm: React.FC<ISignUpFormProps> = ({ onSubmit }) => {
    const initialValues = {
        email: '',
        password: '',
        userName: ''
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(data: ISignUpValues, {
                setFieldError,
                setSubmitting
            }) =>  {
                setSubmitting(true)
                onSubmit(data)
                    .then()
                    .catch(err => {
                        setFieldError('email','Email is already used by another acount')
                        error.message = 'Email is already used by another acount'
                    })
                    .finally(() => setSubmitting(false))
            }}
            validate={(values) => validate(values, error)}
        >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
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
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
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
