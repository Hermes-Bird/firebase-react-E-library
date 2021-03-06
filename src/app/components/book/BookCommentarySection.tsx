import React from 'react'
import {
    Grid,
    Icon,
    IconButton,
    InputAdornment,
    List,
    TextField
} from '@material-ui/core'
import BookComment, { IBookCommentProps } from './BookComment'

const comments = [
    {
        avatarUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/CheHigh.jpg/1200px-CheHigh.jpg',
        userName: 'Che Guevarra',
        commentText:
            'Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze '
    },

    {
        avatarUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/CheHigh.jpg/1200px-CheHigh.jpg',
        userName: 'Che Guevarra',
        commentText:
            'Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze '
    },

    {
        avatarUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/CheHigh.jpg/1200px-CheHigh.jpg',
        userName: 'Che Guevarra',
        commentText:
            'Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze '
    }
]

export const renderComments = (comments: IBookCommentProps[] ) => {
    return comments.map((comment, index) => (
        <BookComment {...comment} key={index} />
    ))
}

const BookCommentarySection = () => {
    return (
        <Grid className="book__comment-section">
            <TextField
                multiline
                fullWidth
                label="Leave your comment"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton color="primary">
                                <Icon>send</Icon>
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
            <List>{renderComments(comments)}</List>
        </Grid>
    )
}

export default BookCommentarySection
