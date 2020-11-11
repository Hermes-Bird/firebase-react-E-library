import React, {useState} from 'react'
import {CircularProgress, Grid, Icon, Typography, withStyles} from '@material-ui/core'
import {Rating as RatingComponent} from '@material-ui/lab'
import {Rating} from '../../models/Book'

const StyledRating = withStyles({
    iconFilled: {
        color: '#ff6d75'
    },
    iconHover: {
        color: '#ff3d47'
    }
})(RatingComponent)

interface IHeartRating {
    rating: Rating,
    readOnly?: boolean
    className?: string
    bookPage?: boolean
    handleChange?:(num:Rating) => Promise<void>
}

const HeartRating: React.FC<IHeartRating> = ({rating, readOnly, className, bookPage, handleChange}) => {
    const [isSetting, setIsSetting] = useState(false)

    if (rating === Rating.notRated && !bookPage) return (
        <Typography variant="subtitle2">
            Not rated yet
        </Typography>
    )

    if (isSetting) return (
        <Grid item justify="center" alignItems="center" container>
            <CircularProgress color="secondary" size={23}/>
        </Grid>
    )

    readOnly = readOnly ? readOnly : false
    className = className ? className : ''
    return (
        <StyledRating
            onChange={(e, value) => {
                if (value && handleChange) {
                    setIsSetting(true)
                    handleChange(value)
                        .finally(() => {
                            setIsSetting(false)
                        })
                }

            }}
            name="heartRate"
            className={className}
            value={rating}
            icon={<Icon color="inherit">favorite</Icon>}
            readOnly={readOnly}
        />
    )
}

export default HeartRating
