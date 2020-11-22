import { Grid } from '@material-ui/core'
import React, {useEffect} from 'react'
import BookAboutSection from '../components/book/BookAboutSection'
import BookActionSection from '../components/book/BookActionSection'
import PageHeader from '../components/utils/PageHeader'
import {RouteComponentProps} from 'react-router'
import {history} from '../../index'
import {useRootContext} from '../stores/RootStore'
import {observer} from 'mobx-react'

interface MatchProps {
    id: string
}

const BookPage: React.FC<RouteComponentProps<MatchProps>> = ({match }) => {
    const {currentBook, fetchBookById} = useRootContext().bookStore
    const {user} = useRootContext().userStore

    useEffect(() => {
        fetchBookById(match.params.id)
            .then((result) => {
                if (result === null ) history.push('/')
            })
            .catch((err) => {
                history.push('/')
            })
    }, [fetchBookById, match])

    const editHandler = () => {history.push(`/admin/book/edit/${match.params.id}`)}

    return (
        <>
            <PageHeader edit={!!user?.isAdmin} editHandler={editHandler}/>
            <Grid container className="book__grid-container">
                <Grid item container>
                    <BookActionSection book={currentBook}/>
                    <BookAboutSection book={currentBook}/>
                </Grid>
            </Grid>
        </>
    )
}

export default observer(BookPage)
