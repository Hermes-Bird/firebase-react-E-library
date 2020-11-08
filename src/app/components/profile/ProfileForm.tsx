import { FormControl, TextField } from '@material-ui/core'
import { Form, Formik } from 'formik'
import React from 'react'
import { ValidatedTextField } from '../auth/ValidatedTextField'
import SaveChangesButton from '../utils/SaveChangesButton'

const ProfileForm = () => {
    return (
        <Formik
            initialValues={{ userName: '', email: '' }}
            onSubmit={(data: any) => {
                console.log(data)
            }}
            // validate={validate}
        >
            {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
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
                            name="email"
                            as={TextField}
                        />
                    </FormControl>
                    <SaveChangesButton handleSubmit={handleSubmit} isSubmitting={isSubmitting} changes={true}/>
                    {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
                </Form>
            )}
        </Formik>
    )
}

export default ProfileForm
