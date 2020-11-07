import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import React from 'react'

export interface IBookCommentProps {
    avatarUrl: string
    userName: string
    commentText: string
}

const BookComment: React.FC<IBookCommentProps> = ({avatarUrl, userName, commentText}) => {
    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar src={avatarUrl} />
            </ListItemAvatar>
            <ListItemText primary={userName} secondary={commentText} />
        </ListItem>
    )
}

export default BookComment
