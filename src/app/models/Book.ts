export enum Rating {
    notRated = 0,
    oneHeart = 1,
    twoHearts = 2,
    threeHearts = 3,
    fourHearts = 4,
    fiveHearts = 5
}

export interface IBook {
    imageUrl: string
    rating: Rating
    title: string
    description: string
    author: string
    publicationYear: string
    pdfUrl: string
    comments: string[]
}