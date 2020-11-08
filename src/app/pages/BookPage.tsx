import { Grid } from '@material-ui/core'
import React from 'react'
import BookAboutSection from '../components/book/BookAboutSection'
import BookActionSection from '../components/book/BookActionSection'
import PageHeader from '../components/utils/PageHeader'


const BookPage = () => {
    return (
        <>
            <PageHeader />
            <Grid container className="book__grid-container">
                <Grid item container>
                    <BookActionSection/>
                    <BookAboutSection/>
                </Grid>
            </Grid>
        </>
    )
}

export default BookPage
