import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import BookCommentarySection from './BookCommentarySection'

const BookAboutSection: React.FC = () => {
    return (
        <Grid item xs={12} sm container direction="column" className="book__about-section">
            <Grid item>
                <Typography
                    className="book__title"
                    variant="h3"
                    color="textPrimary"
                >
                    Flowers for Algeron
                </Typography>
                <Typography
                    variant="body1"
                    color="textSecondary"
                    style={{ paddingLeft: '4px' }}
                >
                    Daniel Keyes (first published 1966)
                </Typography>
            </Grid>
            <Grid className="book__article">
                <Typography variant="h5" className="book__about-title">
                    About this book:
                </Typography>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto, nihil saepe. Modi, rem? Necessitatibus sed nihil nam
                    architecto, facilis debitis et at eius ut esse consectetur
                    tempora expedita voluptatibus. Dicta, facere natus ex
                    repellat explicabo atque vel et, quis obcaecati distinctio
                    enim corrupti veniam placeat maxime
                </Typography>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto, nihil saepe. Modi, rem? Necessitatibus sed nihil nam
                    architecto, facilis debitis et at eius ut esse consectetur
                    tempora expedita voluptatibus. Dicta, facere natus ex
                    repellat explicabo atque vel et, quis obcaecati distinctio
                    enim corrupti veniam placeat maxime
                </Typography>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto, nihil saepe. Modi, rem? Necessitatibus sed nihil nam
                    architecto, facilis debitis et at eius ut esse consectetur
                    tempora expedita voluptatibus. Dicta, facere natus ex
                    repellat explicabo atque vel et, quis obcaecati distinctio
                    enim corrupti veniam placeat maxime
                </Typography>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto, nihil saepe. Modi, rem? Necessitatibus sed nihil nam
                    architecto, facilis debitis et at eius ut esse consectetur
                    tempora expedita voluptatibus. Dicta, facere natus ex
                    repellat explicabo atque vel et, quis obcaecati distinctio
                    enim corrupti veniam placeat maxime
                </Typography>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto, nihil saepe. Modi, rem? Necessitatibus sed nihil nam
                    architecto, facilis debitis et at eius ut esse consectetur
                    tempora expedita voluptatibus. Dicta, facere natus ex
                    repellat explicabo atque vel et, quis obcaecati distinctio
                    enim corrupti veniam placeat maxime
                </Typography>
            </Grid>
            <BookCommentarySection/>
        </Grid>
    )
}

export default BookAboutSection
