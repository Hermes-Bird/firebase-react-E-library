import React from 'react'
import {Grid} from '@material-ui/core'
import PageHeader from '../components/utils/PageHeader'
import PictureContainer from '../components/utils/PictureContainer'

import '../styles/profilePage.css'
import '../styles/bookPage.css'
import AdminEditForm from '../components/forms/AdminEditForm'
import UploadPdfButton from '../components/utils/UploadPdfButton'
import {useRootContext} from '../stores/RootStore'
import {observer} from 'mobx-react'

const BookAddPage: React.FC = () => {
    const pdfRef = React.createRef<HTMLInputElement>()
    const {tempImageUrl, uploadTempBookImage, createNewBook} = useRootContext().bookStore

    return (
        <>
            <PageHeader />
            <Grid className="book__grid-container" container>
                <Grid container item md={4} justify="flex-start" sm={12} direction="column" alignItems="center">
                    <PictureContainer imageUrl={tempImageUrl} imageTitle="Book cover" onUpload={uploadTempBookImage}/>
                    <UploadPdfButton pdfRef={pdfRef}/>
                </Grid>
                <Grid
                    item
                    md={8}
                    sm={12}
                    container
                    justify="center"
                    alignItems="center"
                >
                    <AdminEditForm pdfRef={pdfRef} bookInfo={null} onSubmit={createNewBook} saveButtonText="save book"/>
                </Grid>
            </Grid>
        </>
    )
}

export default observer(BookAddPage)
