import { FormControl, TextField } from '@material-ui/core'
import { Form, Formik } from 'formik'
import React, {useState} from 'react'
import { ValidatedTextField } from '../auth/ValidatedTextField'
import SaveChangesButton from '../utils/SaveChangesButton'
import {observer} from 'mobx-react'
import {profileValidate} from '../../validation/profileValidation'
import {IProfileFormValues} from '../../models/User'

interface IProfileFormProps {
    userName: string
    email: string
    onSubmit: (values: IProfileFormValues) => Promise<void>
}

const isChanged = (current: IProfileFormValues, initial: IProfileFormValues) => current.email !== initial.email || current.userName !== initial.userName

const ProfileForm = ({userName, email, onSubmit}: IProfileFormProps) => {
    return (
        <Formik
            initialValues={{ userName, email }}
            onSubmit={(data: IProfileFormValues, {
                setFieldError,
                setSubmitting,
                setErrors
            }) => {
                setSubmitting(true)
                onSubmit(data)
                    .then()
                    .catch(err => {
                        setFieldError('email', err.message)
                        setErrors({email: err.message})
                    })
                    .finally(() => {
                        setSubmitting(false)
                    })
            }}
            validate={profileValidate}
            enableReinitialize
        >
            {({   values,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  initialValues
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
                              name="email"
                              as={TextField}
                          />
                      </FormControl>
                      <SaveChangesButton handleSubmit={handleSubmit} isSubmitting={isSubmitting} changes={isChanged(initialValues, values)}/>
                      {/*<pre>{JSON.stringify(values, null, 2)}</pre>*/}
                  </Form>
                )
            }
        </Formik>
    )
}

export default observer(ProfileForm)
