import {Fab, Icon, Paper, Typography} from '@material-ui/core'
import React, {ChangeEvent, useState} from 'react'

export interface IPictureContainerProps {
    imageTitle?: string
    imageUrl: string
    onUpload: (file: File) => Promise<void|string>
}

const PictureContainer: React.FC<IPictureContainerProps> = ({imageUrl, imageTitle, onUpload}) => {
    const [uploading, setUploading] = useState(false)
    const handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
        setUploading(true)
        if (e.target && e.target.files && onUpload) {
            const file = e.target.files[0]
            await onUpload(file)
        }
        setUploading(false)
    }

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
                    disabled={uploading}
                    id="form-image-upload"
                >
                    <Icon>cloud_upload</Icon>
                    <input
                        disabled={uploading}
                        type="file"
                        accept="image/*"
                        style={{display: 'none'}}
                        onChange={(e) => handleInputChange(e)}
                    />
                </Fab>
            </Paper>
        </>
    )
}

export default PictureContainer
