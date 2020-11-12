import React from 'react'
import {Grid, Icon, Paper, Typography} from '@material-ui/core'
import BookListItem from './BookListItem'
import {IBook} from '../../models/Book'
import {CollectionNames} from '../../models/User'
import {useRootContext} from '../../stores/RootStore'
import {observer} from 'mobx-react'


const renderList = (bookItems: IBook[], collectionName: CollectionNames) => {
    return bookItems.map((bookItem, index) => {
        return (
            <BookListItem key={bookItem.id} imageUrl={bookItem.imageUrl} title={bookItem.title} collectionName={collectionName} id={bookItem.id}/>
        )
    })
}

interface IBookListProps {
    listName: string
    bookItems: IBook[]
    collectionName: CollectionNames
}

const ProfileBookList: React.FC<IBookListProps> = ({ listName, collectionName, bookItems}) => {
    const {user} = useRootContext().userStore
    const collection = user ? user[collectionName] : []

    return (
        <>
            <Typography
                variant="h5"
                color="primary"
                className="profile__list-title"
            >
                {listName}
            </Typography>
            {collection.length > 0 ? (
                <Paper variant="outlined" className="profile__list-container">
                    <Grid className="profile__list" container>
                        {renderList(bookItems, collectionName)}
                    </Grid>
                </Paper>
            ) : (
                <Grid
                    item
                    container
                    justify="center"
                    alignItems="center"
                    direction="column"
                    className="profile__empty-list"
                >
                    <Typography color="inherit">List is empty</Typography>
                    <Icon color="inherit">inbox</Icon>
                </Grid>
            )}
        </>
    )
}

export default observer(ProfileBookList)
