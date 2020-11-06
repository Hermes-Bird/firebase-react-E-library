import { Button, ButtonBase, Grid, Icon, Paper, Typography} from '@material-ui/core'
import React from 'react'
import HeartRating from '../utils/HeartReating';

export interface IBookProps {
    imgUrl: string
    title: string
    author: string
    published: number
    rating: number
}

const Book: React.FC<IBookProps> = ({title, author, published, rating, imgUrl}) => {
    return (
        <>
            <Paper className="book-item">
                <Grid container spacing={3}>
                    <Grid item>
                        <ButtonBase>
                            <img
                                width="90px"
                                height="120px"
                                alt="complex"
                                src={imgUrl}
                                // src=""
                            />
                        </ButtonBase>
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
                                    {author} ({published})
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="caption">
                                    <HeartRating rating={rating} readOnly/>  
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" size="large">
                                <Icon>read_more</Icon>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default Book
