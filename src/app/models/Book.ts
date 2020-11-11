export enum Rating {
    notRated = 0,
    oneHeart = 1,
    twoHearts = 2,
    threeHearts = 3,
    fourHearts = 4,
    fiveHearts = 5
}

export type Ratings = {[key: string]: Rating}

export interface IBook {
    id: string
    imageUrl: string
    rating: Rating
    ratings: Ratings
    title: string
    description: string
    author: string
    publicationYear: string
    pdfUrl: string
    comments: string[]
}