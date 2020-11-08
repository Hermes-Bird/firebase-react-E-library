import { Grid, Icon, IconButton, Paper, Typography } from '@material-ui/core'
import React from 'react'

export interface IBookListItemProps {
    imageUrl: string
    title: string
}

const BookListItem: React.FC<IBookListItemProps> = ({imageUrl, title}) => {
    return (
        <Grid container alignItems="center" xs={12} lg={6} className="profile__book-item">
            <Grid item container alignItems="center" xs={11}>
                <Paper style={{backgroundImage: `url(${imageUrl})`}} className="profile__list-image"/>
                <Typography variant="body2" className="profile__book-title">
                    {title}
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <IconButton color="secondary">
                    <Icon color="inherit">close</Icon>
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default BookListItem
