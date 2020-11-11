export interface IBookFormValues {
    title: string,
    author: string,
    publicationYear: string,
    description: string,
    pdfFile: File | string,
}


export interface IBookErrorValues {
    title?: string,
    author?: string,
    publicationYear?: string,
    description?: string
    pdfFile?: string,
}

export const bookValidate = ({ title, author, publicationYear, description, pdfFile}: IBookFormValues): (IBookErrorValues | {}) => {
    const errors: IBookErrorValues = {}

    if (!title) {
        errors.title = 'Title is required'
    } else if (title.length < 3) {
        errors.title = 'Title should be at least 3 characters'
    }

    if (!author) {
        errors.author = 'Title is required'
    } else if (author.length < 4) {
        errors.author = 'Title should be at least 4 characters'
    }

    if (!description) {
        errors.description = 'Description is required'
    } else if (description.length < 20) {
        errors.description = 'Description should be at least 20 characters'
    }

    if(!publicationYear) {
        errors.publicationYear = 'Publication year is required'
    } else if (!/^\d{4}$/.test(publicationYear)) {
        errors.publicationYear = 'Publication year must contain 4 digits'
    }

    if(!pdfFile && !errors.title) {
        errors.title = 'You must provide pdf file'
    }

    return errors
}