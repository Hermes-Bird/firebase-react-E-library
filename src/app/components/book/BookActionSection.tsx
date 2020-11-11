import React from 'react'
import {Button, Grid, Paper, Typography} from '@material-ui/core'
import '../../styles/bookPage.css'
import HeartRating from '../utils/HeartReating'
import {IBook, Rating} from '../../models/Book'
import {observer} from 'mobx-react'
import {useRootContext} from '../../stores/RootStore'
import BookActionButton from './BookActionButton'
import {useBookInFavoriteAndInRead} from '../../hooks/useBookInCollections'
import {CollectionNames} from '../../models/User'


const BookActionSection: React.FC<{book: IBook | null}> = ({book}) => {
    const {setCurrentBookRating} = useRootContext().bookStore
    const {addBookToCollection} = useRootContext().userStore

    const {user} = useRootContext().userStore
    const bookRating = book?.ratings[user?.id || ''] || Rating.notRated
    const [inFavorite, inRead] = useBookInFavoriteAndInRead()

    return (
        <Grid item xs={12} sm={6} container alignItems="center" direction="column">
            <Paper
                className="book__image"
                style={{ backgroundImage: `url(${book?.imageUrl || ''})` }}
            />
            <Grid item>
                <Typography align="center" variant="body2" color="textSecondary">
                    Rate this book:
                </Typography>
                <HeartRating bookPage handleChange={setCurrentBookRating} rating={bookRating}/>
            </Grid>
            <a href={book?.pdfUrl} target="_blank">
                <Button className="book__read-button" color="primary" variant="contained">Read</Button>
            </a>
            <Grid className="book__menu" container item justify="center" alignContent="center">
                <BookActionButton collectionName={CollectionNames.markedAsRead} icon="book" text="Mark as read" alreadyIn={inRead}/>
                <BookActionButton collectionName={CollectionNames.favorite} icon="stars" text="Add to favorite" alreadyIn={inFavorite}/>
            </Grid>

        </Grid>
    )
}

export default observer(BookActionSection)
