import { Rating, Ratings } from '../models/Book'

export const calculateRating = (obj: Ratings): Rating => {
    const ratingArray = Object.keys(obj).map(key => obj[key])

    return Math.floor(
        ratingArray.reduce((sum, curr) => sum + curr, 0) / ratingArray.length
    )
}

type Obj = { [key: string]: any }

export const isEqualObjects = (obj1: Obj, obj2: Obj) => {
    const firstObjectKeys = Object.keys(obj1)
    const secondObjectKeys = Object.keys(obj2)
    let equality = true

    firstObjectKeys.forEach(key => {
        equality = !equality ? false : obj1[key] === obj2[key]
    })

    secondObjectKeys.forEach(key => {
        equality = !equality ? false : obj2[key] === obj1[key]
    })

    return equality
}
