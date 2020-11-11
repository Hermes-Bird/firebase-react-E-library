import {Rating, Ratings} from '../models/Book'

export const calculateRating = (obj: Ratings): Rating => {
    const ratingArray = Object.keys(obj).map(key => obj[key])

    return  Math.floor(ratingArray.reduce((sum, curr) => sum + curr, 0) / ratingArray.length)
}