import React from 'react'
import { Button, Grid, Icon, Paper, Typography} from '@material-ui/core'
import HeartRating from '../utils/HeartReating';
import {Rating} from '../../models/Book'
import {Link} from 'react-router-dom'

export interface IBookProps {
    imageUrl: string
    title: string
    author: string
    publicationYear: string
    rating: Rating
    id: string
}

const Book: React.FC<IBookProps> = ({title, author, publicationYear, rating, imageUrl, id}) => {
    return (
        <>
            <Paper className="book-item">
                <Grid container spacing={3}>
                    <Grid item>
                            <Paper
                                className="home__book-cover"
                                style={{backgroundImage: `url(${imageUrl})`}}
                            />
                    </Grid>
                    <Grid item xs container alignItems="center" justify="space-around">
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item>
                                <Typography gutterBottom variant="h6" color="primary">
                                    {title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    {author} ({publicationYear})
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="caption">
                                    <HeartRating rating={rating} readOnly/>  
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Link to={`book/${id}`}>
                                <Button variant="contained" color="primary" size="large">
                                    <Icon>read_more</Icon>
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default Book
