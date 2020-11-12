import {Grid, Typography} from '@material-ui/core'
import React from 'react'
import {IBook} from '../../models/Book'

interface IBookAboutSectionProps {
    book: IBook | null
}

const BookAboutSection: React.FC<IBookAboutSectionProps> = ({book}) => {
    return (
        <Grid item xs={12} sm={6} container direction="column" className="book__about-section">
            <Grid item>
                <Typography
                    className="book__title"
                    variant="h3"
                    color="textPrimary"
                >
                    {book?.title || ''}
                </Typography>
                <Typography
                    variant="body1"
                    color="textSecondary"
                    style={{paddingLeft: '4px'}}
                >
                    {`${book?.author || ''} (first published ${book?.publicationYear || ''})`}
                </Typography>
            </Grid>
            <Grid className="book__article">
                <Typography variant="h5" className="book__about-title">
                    About this book:
                </Typography>
                <Typography variant="body1">
                    {book?.description || ''}
                </Typography>
                {/*<BookCommentarySection/>*/}
            </Grid>
        </Grid>
    )
}

export default BookAboutSection
