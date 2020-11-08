import { Fab, Icon, Paper, Typography } from '@material-ui/core'
import React from 'react'

export interface IProfilePictureProps {
    imageUrl: string
}


const ProfilePictureContainer:React.FC<IProfilePictureProps> = ({imageUrl}) => {
    return (
        <>
            <Typography variant="h5" color="primary">
                Profile picture
            </Typography>
            <Paper
                className="profile__avatar"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            >
                <Fab
                    color="secondary"
                    component="label"
                    size="small"
                    className="profile__avatar-upload"
                >
                    <Icon>cloud_upload</Icon>
                    <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                    />
                </Fab>
            </Paper>
        </>
    )
}

export default ProfilePictureContainer
