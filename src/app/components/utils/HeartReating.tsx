import { Icon, withStyles } from '@material-ui/core'
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
    rating: number,
    readOnly?: boolean
}

const HeartRating: React.FC<IHeartRating> = ({rating, readOnly}) => {
    readOnly = readOnly ? readOnly : false
    return (
        <StyledRating
            value={rating}
            getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
            icon={<Icon color="inherit">favorite</Icon>}
            readOnly={readOnly}
        />
    )
}

export default HeartRating
