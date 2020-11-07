import React from 'react'
import { Button, Grid, Icon, Paper, Typography } from '@material-ui/core'

import '../../styles/bookPage.css'
import HeartRating from '../utils/HeartReating'

const algeron = 'https://img1.od-cdn.com/ImageType-400/1694-1/E57/F99/64/{E57F9964-4362-4702-8A1D-B816679AA6FB}Img400.jpg'


const BookActionSection = () => {
    return (
        <Grid item xs={12} sm={5} container alignItems="center" direction="column">
            <Paper
                className="book__image"
                style={{ backgroundImage: `url(${algeron})` }}
            />
            <Button className="book__read-button" color="primary" variant="contained">Read</Button>
            <Grid item>
                <HeartRating rating={5}/>
            </Grid>
            <Grid className="book__menu" container item justify="center" alignContent="center">
                <Grid className="book__menu-item" item xs={6} sm={12} alignItems="center" justify="center" container>
                    <Icon color="inherit" fontSize="large">book</Icon>
                    <Typography>
                        Mark as read
                    </Typography>
                </Grid>
                <Grid className="book__menu-item" item xs={6} sm={12} alignItems="center" justify="center" container>
                    <Icon color="inherit" fontSize="large">stars</Icon>
                    <Typography>
                        Add to favorite
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default BookActionSection
