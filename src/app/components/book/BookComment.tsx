import {
    Avatar,
    Icon,
    IconButton,
    ListItem,
    ListItemAvatar,
    ListItemText
} from '@material-ui/core'
import React from 'react'

export interface IBookCommentProps {
    avatarUrl: string
    userName: string
    commentText: string
    edit?: boolean
}

const BookComment: React.FC<IBookCommentProps> = ({
    avatarUrl,
    userName,
    commentText,
    edit
}) => {
    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar src={avatarUrl} />
            </ListItemAvatar>
            <ListItemText primary={userName} secondary={commentText} />
            {
                edit 
                ? (
                    <IconButton color="secondary">
                        <Icon>close</Icon>
                    </IconButton>
                ) : null
            }
        </ListItem>
    )
}

export default BookComment
