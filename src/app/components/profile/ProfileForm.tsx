import { Fab, FormControl, TextField } from '@material-ui/core'
import { Form, Formik } from 'formik'
import React from 'react'
import { ValidatedTextField } from '../auth/ValidatedTextField'
import RootPortal from '../utils/RootPortal'


const ProfileForm = () => {
    return (
        <Formik
                initialValues={{}}
                onSubmit={(data: any) => {
                    console.log(data)
                }}
                // validate={validate}
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
                                color="primary"
                                label="User name"
                                type="text"
                                name="userName"
                                as={TextField}
                                error
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <ValidatedTextField
                                color="primary"
                                label="Email"
                                type="text"
                                name="password"
                                as={TextField}
                            />
                        </FormControl>
                        <RootPortal>
                            <Fab variant="extended" color="primary" className="profile__save-changes" type="submit">
                                Save changes
                            </Fab>
                        </RootPortal>
                        {/*<pre>{JSON.stringify(values, null, 2)}</pre>*/}
                    </Form>
                )}
            </Formik>

    )
}

export default ProfileForm
