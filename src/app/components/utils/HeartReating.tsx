import { Icon, Typography, withStyles } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import React from 'react'

const StyledRating = withStyles({
    iconFilled: {
        color: '#ff6d75'
    },
    iconHover: {
        color: '#ff3d47'
    }
})(Rating)

interface IHeartRating {
    rating: number | null,
    readOnly?: boolean,
    className?: string
}

const HeartRating: React.FC<IHeartRating> = ({rating, readOnly, className}) => {
    if (rating === null) return (
        <Typography variant="subtitle2">
            Not rated yet
        </Typography>
    )
    readOnly = readOnly ? readOnly : false
    className = className ? className : ''
    return (
        <StyledRating
            className={className}
            value={rating}
            getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
            icon={<Icon color="inherit">favorite</Icon>}
            readOnly={readOnly}
        />
    )
}

export default HeartRating
