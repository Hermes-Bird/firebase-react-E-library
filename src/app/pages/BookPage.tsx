import { Grid } from '@material-ui/core'
import React from 'react'
import BookAboutSection from '../components/book/BookAboutSection'
import BookActionSection from '../components/book/BookActionSection'
import BookPageHeader from '../components/book/BookPageHeader'


const BookPage = () => {
    return (
        <>
            <BookPageHeader />
            <Grid container style={{ paddingTop: '30px' }}>
                <Grid item container>
                    <BookActionSection/>
                    <BookAboutSection/>
                </Grid>
            </Grid>
        </>
    )
}

export default BookPage
