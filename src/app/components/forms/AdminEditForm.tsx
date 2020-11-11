import {FormControl, Grid} from '@material-ui/core'
import {Form, Formik} from 'formik'
import React from 'react'
import AdornmentField from '../utils/AdornmentField'
import SaveChangesButton from '../utils/SaveChangesButton'
import {IBook} from '../../models/Book'
import {bookValidate, IBookFormValues} from '../../validation/bookValidation'
import RefPortal from '../portals/RefPortal'
import {history} from '../../../index'
import {useRootContext} from '../../stores/RootStore'

interface IAdminEditFormProps {
    onSubmit: (bookValues: IBookFormValues) => Promise<void>
    bookInfo: IBook | null
    pdfRef: React.RefObject<HTMLLabelElement>
}

let initialValues: IBookFormValues = {
    title: '',
    author: '',
    publicationYear: '',
    description: '',
    pdfFile: ''
}


const AdminEditForm: React.FC<IAdminEditFormProps> = ({bookInfo, pdfRef, onSubmit}) => {
    const {uploadPdf} = useRootContext().bookStore

    if (bookInfo) {
        initialValues = {
            title: bookInfo.title,
            author: bookInfo.author,
            publicationYear: bookInfo.publicationYear,
            description: bookInfo.description,
            pdfFile: bookInfo.pdfUrl
        }
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(data: IBookFormValues, {
                setSubmitting,
                setErrors,
                setFieldError
            }) => {
                setSubmitting(true)
                onSubmit(data)
                    .then(() => {
                        console.log('success!!!')
                        history.push('/')
                    })
                    .catch((err) => {
                        setErrors({title: 'Woops something going wrong'})
                        setFieldError('title', 'Woops something going wrong')
                    })
                console.log(data)
            }}
            validate={bookValidate}
        >
            {({
                  values,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting
              }) => (
                <Form>
                    <Grid container className="admin__form-grid" spacing={2}>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <AdornmentField adornment="Title:" name="title"/>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <AdornmentField adornment="Author:" name="author"/>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <AdornmentField adornment="Publish Year:" name="publicationYear"/>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <AdornmentField adornment="About:" multiline name="description"/>
                            </FormControl>
                        </Grid>
                        <RefPortal containerRef={pdfRef}>
                            <input onChange={(e) => {
                                if (e.target && e.target.files) {
                                    uploadPdf(e.target.files[0])
                                }
                                handleChange(e)
                            }} type="file" accept="application/pdf" name="pdfFile" style={{display: 'none'}}/>
                        </RefPortal>
                    </Grid>
                    {/*<pre>{JSON.stringify(values, null, 2)}</pre>*/}
                    <SaveChangesButton
                        handleSubmit={handleSubmit}
                        isSubmitting={isSubmitting}
                        changes={true}
                    />
                </Form>
            )}
        </Formik>
    )
}

export default AdminEditForm
