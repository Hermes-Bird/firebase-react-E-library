import React from 'react'
import { Grid } from '@material-ui/core'
import { observer } from 'mobx-react'
import { useRootContext } from '../stores/RootStore'
import PageHeader from '../components/utils/PageHeader'
import PictureContainer from '../components/utils/PictureContainer'
import AdminEditForm from '../components/forms/AdminEditForm'
import UploadPdfButton from '../components/utils/UploadPdfButton'

import '../styles/profilePage.css'
import '../styles/bookPage.css'
import { ModalTypes } from '../stores/ModalStore'

const BookAddPage: React.FC = () => {
    const {
        tempImageUrl,
        uploadTempBookImage,
        createNewBook
    } = useRootContext().bookStore

    const {
        discardWarning,
        openModalWindow
    } = useRootContext().modalStore

    return (
        <>
            <PageHeader 
                exitHandler={
                    discardWarning ? () => {
                        openModalWindow(ModalTypes.discardWarning)
                    } : undefined
                }
            />
            <Grid className="book__grid-container" container>
                <Grid
                    item
                    container
                    md={4}
                    justify="flex-start"
                    sm={12}
                    direction="column"
                    alignItems="center"
                >
                    <PictureContainer
                        imageUrl={tempImageUrl}
                        imageTitle="Book cover"
                        onUpload={uploadTempBookImage}
                    />
                    <UploadPdfButton />
                </Grid>
                <Grid
                    item
                    md={8}
                    sm={12}
                    container
                    justify="center"
                    alignItems="center"
                >
                    <AdminEditForm
                        modalType={ModalTypes.successAdd}
                        bookInfo={null}
                        onSubmit={createNewBook}
                        saveButtonText="save book"
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default observer(BookAddPage)
