import React from 'react'
import { Grid, Icon, Paper, Typography } from '@material-ui/core'
import BookListItem, { IBookListItemProps } from './BookListItem'

const renderList = (bookItems: IBookListItemProps[]) => {
    return bookItems.map((bookItem, index) => (
        <BookListItem imageUrl={bookItem.imageUrl} title={bookItem.title} key={index} />
    ))
}

interface IBookListProps {
    listName: string
    bookItems: IBookListItemProps[]
}

const ProfileBookList: React.FC<IBookListProps> = ({ listName, bookItems }) => {
    return (
        <>
            <Typography
                variant="h5"
                color="primary"
                className="profile__list-title"
            >
                {listName}
            </Typography>
            {bookItems.length > 0 ? (
                <Paper variant="outlined" className="profile__list-container">
                    <Grid container>{renderList(bookItems)}</Grid>
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

export default ProfileBookList
