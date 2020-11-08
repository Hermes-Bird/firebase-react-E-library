import { Fab, Icon, Paper, Typography } from '@material-ui/core'
import React from 'react'

export interface IPictureContainerProps {
    imageTitle?: string
    imageUrl: string
}


const PictureContainer:React.FC<IPictureContainerProps> = ({imageUrl, imageTitle}) => {
    return (
        <>
            <Typography variant="h5" color="primary">
                {imageTitle}
            </Typography>
            <Paper
                className="profile__image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            >
                <Fab
                    color="secondary"
                    component="label"
                    size="small"
                    className="profile__image-upload"
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

export default PictureContainer
