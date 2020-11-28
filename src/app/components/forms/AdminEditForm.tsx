import React from 'react'
import { FormControl, Grid } from '@material-ui/core'
import { Form, Formik } from 'formik'
import AdornmentField from '../utils/AdornmentField'
import SaveChangesButton from '../utils/SaveChangesButton'
import { IBook } from '../../models/Book'
import { bookValidate, IBookFormValues } from '../../validation/bookValidation'
import { useRootContext } from '../../stores/RootStore'
import { usePdfRef } from '../../hooks/usePdfRef'
import { observer } from 'mobx-react'
import SuccessModal from '../modals/SuccessModal'
import { ModalTypes } from '../../stores/ModalStore'

interface IAdminEditFormProps {
    onSubmit: (bookValues: IBookFormValues) => Promise<void>
    bookInfo: IBook | null
    pdfRef: React.RefObject<HTMLInputElement>
    saveButtonText?: string
}

const AdminEditForm: React.FC<IAdminEditFormProps> = ({
    bookInfo,
    pdfRef,
    onSubmit,
    saveButtonText
}) => {
    const { uploadPdf } = useRootContext().bookStore
    const pdf = usePdfRef(pdfRef, uploadPdf)
    const { openModalWindow } = useRootContext().modalStore

    const initialValues: IBookFormValues = {
        title: bookInfo?.title || '',
        author: bookInfo?.author || '',
        publicationYear: bookInfo?.publicationYear || '',
        description: bookInfo?.description || '',
        pdfFile: bookInfo?.pdfUrl || ''
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(
                data: IBookFormValues,
                { setSubmitting, setErrors, setFieldError }
            ) => {
                setSubmitting(true)
                onSubmit(data)
                    .then(() => {
                        openModalWindow(ModalTypes.discardWarning)
                    })
                    .catch(err => {
                        console.log(err)
                        openModalWindow(ModalTypes.error)
                        setErrors({ title: 'Woops something going wrong' })
                        setFieldError('title', 'Woops something going wrong')
                    })
            }}
            validate={bookValidate}
            enableReinitialize
        >
            {({ values, handleSubmit, isSubmitting, setFieldValue }) => {
                if (pdf && !values.pdfFile) {
                    setFieldValue('pdfFile', pdf)
                }
                return (
                    <Form>
                        <Grid
                            container
                            className="admin__form-grid"
                            spacing={2}
                        >
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <AdornmentField
                                        adornment="Title:"
                                        name="title"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <AdornmentField
                                        adornment="Author:"
                                        name="author"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <AdornmentField
                                        adornment="Publish Year:"
                                        name="publicationYear"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <AdornmentField
                                        adornment="About:"
                                        multiline
                                        name="description"
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        {/*<pre>{JSON.stringify(values, null, 2)}</pre>*/}
                        <SaveChangesButton
                            buttonText={saveButtonText}
                            handleSubmit={handleSubmit}
                            isSubmitting={isSubmitting}
                            changes={true}
                        />
                        <SuccessModal />
                    </Form>
                )
            }}
        </Formik>
    )
}

export default observer(AdminEditForm)
