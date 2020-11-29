import React from 'react'
import { FormControl, Grid } from '@material-ui/core'
import { Form, Formik } from 'formik'
import AdornmentField from '../utils/AdornmentField'
import SaveChangesButton from '../utils/SaveChangesButton'
import { IBook } from '../../models/Book'
import { bookValidate, IBookFormValues } from '../../validation/bookValidation'
import { useRootContext } from '../../stores/RootStore'
import { observer } from 'mobx-react'
import SuccessModal from '../modals/ModalWindow'
import { ModalTypes } from '../../stores/ModalStore'
import { isEqualObjects } from '../../helpers/helper'

interface IAdminEditFormProps {
    onSubmit: (bookValues: IBookFormValues) => Promise<void>
    bookInfo: IBook | null
    saveButtonText?: string
    modalType: ModalTypes
}

const AdminEditForm: React.FC<IAdminEditFormProps> = ({
    bookInfo,
    onSubmit,
    saveButtonText,
    modalType
}) => {
    const { tempPdfFile, tempImageFile } = useRootContext().bookStore
    const { openModalWindow, setDiscardWarning } = useRootContext().modalStore

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
            onSubmit={(data: IBookFormValues, { setSubmitting }) => {
                setSubmitting(true)
                onSubmit(data)
                    .then(() => {
                        openModalWindow(modalType)
                    })
                    .catch(err => {
                        console.log(err)
                        openModalWindow(ModalTypes.error)
                    })
            }}
            validate={bookValidate}
            enableReinitialize
        >
            {({ values, handleSubmit, isSubmitting, setFieldValue }) => {
                if (tempPdfFile && values.pdfFile !== tempPdfFile) {
                    setFieldValue('pdfFile', tempPdfFile)
                }
                
                // check equality of initial and current values || or changing of temp image file
                const changes =
                    !isEqualObjects(values, initialValues) ||
                    typeof tempImageFile !== 'string'
    
                setDiscardWarning(changes)
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
                            changes={changes}
                        />
                        <SuccessModal />
                    </Form>
                )
            }}
        </Formik>
    )
}

export default observer(AdminEditForm)
