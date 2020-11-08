import { FormControl, Grid } from '@material-ui/core'
import { Form, Formik, FormikValues } from 'formik'
import React from 'react'
import AdornmentField from '../utils/AdornmentField'
import SaveChangesButton from '../utils/SaveChangesButton'

const AdminEditForm: React.FC<{}> = () => {
    return (
        <Formik
            initialValues={{ title: '', author: '', publishYear: '', description: ''}}
            onSubmit={(data: FormikValues) => {
                console.log(data)
            }}
            // validate={() => {}}
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
                                <AdornmentField adornment="Title:" name="title" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <AdornmentField adornment="Author:" name="author" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <AdornmentField adornment="Publish Year:" name="publishYear" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <AdornmentField adornment="About:" multiline name="description" />
                            </FormControl>                  
                        </Grid>
                    </Grid>
                    {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
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
