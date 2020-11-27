import React, {useEffect, useState} from 'react'
import {RouteComponentProps} from 'react-router'
import {observer} from 'mobx-react'
import {Grid} from '@material-ui/core'
import {useRootContext} from '../stores/RootStore'
import {history} from '../../index'
import {IBookFormValues} from '../validation/bookValidation'
import PageHeader from '../components/utils/PageHeader'
import PictureContainer from '../components/utils/PictureContainer'
import AdminEditForm from '../components/forms/AdminEditForm'
import UploadPdfButton from '../components/utils/UploadPdfButton'

import '../styles/bookPage.css'
import '../styles/profilePage.css'
import Modal from '../components/modals/Modal'

interface IMatchProps {
    id: string
}

const BookEditPage: React.FC<RouteComponentProps<IMatchProps>> = ({match}) => {
    const pdfRef = React.createRef<HTMLInputElement>()
    const {uploadTempBookImage} = useRootContext().bookStore
    const {currentBook, fetchBookById, deleteBookById, updateBookById} = useRootContext().bookStore

    const [imageUrl, setImageUrl] = useState('')


    const deleteBook = async () => {
        await deleteBookById(match.params.id)
        history.push('/')
    }

    const updateBook: (val: IBookFormValues) => Promise<void> = async (values) => {
        await updateBookById(values, match.params.id)
    }

    const onImageUpload = async (file: File) => {
        const tempUrl = await uploadTempBookImage(file)
        setImageUrl(tempUrl)
    }

    useEffect(() => {
            fetchBookById(match.params.id)
                .then(() => setImageUrl(currentBook?.imageUrl || imageUrl))
    }, [])


    return (
        <>
            <PageHeader buttonText="delete" icon="delete" edit editHandler={deleteBook} />
            <Grid className="book__grid-container" container>
                <Grid container item md={4} justify="flex-start" sm={12} direction="column" alignItems="center">
                    <PictureContainer imageUrl={imageUrl} imageTitle="Book cover" onUpload={onImageUpload}/>
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
                    <AdminEditForm pdfRef={pdfRef} bookInfo={currentBook} onSubmit={updateBook}/>
                </Grid>
            </Grid>
        </>
    )
}

export default observer(BookEditPage)
