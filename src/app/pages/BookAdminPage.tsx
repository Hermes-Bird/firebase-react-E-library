import {Grid, List, Typography} from '@material-ui/core'
import React from 'react'
import PageHeader from '../components/utils/PageHeader'
import PictureContainer from '../components/utils/PictureContainer'

import '../styles/profilePage.css'
import '../styles/bookPage.css'
import AdminEditForm from '../components/forms/AdminEditForm'
import { renderComments } from '../components/book/BookCommentarySection'
import UploadPdfButton from '../components/utils/UploadPdfButton'
import {useRootContext} from '../stores/RootStore'
import {observer} from 'mobx-react'


export enum bookPageType {
    add,
    edit
}
// const comments = [
//     {
//         avatarUrl:
//             'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/CheHigh.jpg/1200px-CheHigh.jpg',
//         userName: 'Che Guevarra',
//         edit: true,
//         commentText:
//             'Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze '
//     },
// ]

const comments: [] = []

interface IBookAdminPageProps {
    type: bookPageType
}

const BookAdminPage = ({type}: IBookAdminPageProps) => {
    const pdfRef = React.createRef<HTMLLabelElement>()
    const {tempImageUrl, uploadTempBookImage, createNewBook} = useRootContext().bookStore

    return (
        <>
            <PageHeader buttonText={type === bookPageType.edit ? 'delete' : 'edit'} edit={type === bookPageType.edit} icon="delete"/>
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
                    <AdminEditForm pdfRef={pdfRef} bookInfo={null} onSubmit={createNewBook}/>
                    {comments.length > 0 ? (
                        <>
                            <Typography>Book Comments:</Typography>
                            <List>{renderComments(comments)}</List>
                        </>
                    ) : null}
                </Grid>
            </Grid>
        </>
    )
}

export default observer(BookAdminPage)
