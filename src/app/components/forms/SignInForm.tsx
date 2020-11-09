import React from 'react'
import {Form, Formik} from 'formik'
import {validate, ValidatedTextField} from '../auth/ValidatedTextField'
import {Button, FormControl, TextField} from '@material-ui/core'
import { ISignInValues } from '../../models/User'

interface IUserFormProps {
    onSubmit: (data: ISignInValues) => Promise<void>
}


const SignInForm: React.FC<IUserFormProps> = ({onSubmit}) => {
    const initialValues: ISignInValues = {email: '', password: '',}
    return (
            <Formik
                initialValues={initialValues}
                onSubmit={(data: ISignInValues) => onSubmit(data)}
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

export default SignInForm