import { InputAdornment, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { ValidatedTextField } from '../auth/ValidatedTextField'

interface IAdornmentField {
    adornment: string | React.ReactNode
    name: string
    multiline?: boolean
}

const AdornmentField: React.FC<IAdornmentField> = ({
    adornment,
    name,
    multiline
}) => {
    return (
        <ValidatedTextField
            type="text"
            name={name}
            multiline={multiline || false}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Typography variant="overline" color="primary" style={{ fontWeight: 'bold' }}>
                            {adornment}
                        </Typography>
                    </InputAdornment>
                )
            }}
            as={TextField}
        />
    )
}

export default AdornmentField
