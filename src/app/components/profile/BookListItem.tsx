import {CircularProgress, Grid, Icon, IconButton, Paper, Typography} from '@material-ui/core'
import React, {useState} from 'react'
import {CollectionNames} from '../../models/User'
import {useRootContext} from '../../stores/RootStore'

export interface IBookListItemProps {
    imageUrl: string
    title: string
    id: string
    collectionName: CollectionNames
}

const BookListItem: React.FC<IBookListItemProps> = ({imageUrl, title, collectionName, id}) => {
    const [isDeleting, setIsDeleting] = useState(false)
    const {removeBookFromCollection} = useRootContext().userStore

    const handleClick = () => {
        setIsDeleting(true)
        removeBookFromCollection(id, collectionName)
            .finally(() => setIsDeleting(false))
    }
    
    return (
        <Grid container item alignItems="center" xs={12} lg={6} className="profile__book-item">
            <Grid item container alignItems="center" xs={11} wrap="nowrap">
                <Paper style={{backgroundImage: `url(${imageUrl})`}} className="profile__list-image"/>
                <Typography variant="body2" className="profile__book-title">
                    {title}
                </Typography>
            </Grid>
            <Grid item xs={1}>
                {
                    isDeleting ? <CircularProgress/>
                        : (
                            <IconButton color="secondary" onClick={handleClick}>
                                <Icon color="inherit">close</Icon>
                            </IconButton>
                        )
                }
            </Grid>
        </Grid>
    )
}

export default BookListItem
