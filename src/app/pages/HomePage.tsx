import React from 'react'
import HomeHeader from '../components/home/Header'
import SearchBar from '../components/home/SerchBar'
import {Grid} from '@material-ui/core'
import '../styles/homePage.css'
import Book, { IBookProps } from '../components/home/Book'
import ContentContainer from '../components/home/ContentContainer'


const algeron = 'https://img1.od-cdn.com/ImageType-400/1694-1/E57/F99/64/{E57F9964-4362-4702-8A1D-B816679AA6FB}Img400.jpg'

const books: IBookProps[] = [
    {
        title: 'Flowers for Algeron',
        author: 'Daniel Keyes',
        published: 1966,
        imgUrl: algeron,
        rating: 5
    },
    {
        title: 'Flowers for Algeron',
        author: 'Daniel Keyes',
        published: 1966,
        imgUrl: algeron,
        rating: 5
    },
    {
        title: 'Flowers for Algeron',
        author: 'Daniel Keyes',
        published: 1966,
        imgUrl: algeron,
        rating: 5
    },
    {
        title: 'Flowers for Algeron',
        author: 'Daniel Keyes',
        published: 1966,
        imgUrl: algeron,
        rating: 5
    },
    {
        title: 'Flowers for Algeron',
        author: 'Daniel Keyes',
        published: 1966,
        imgUrl: algeron,
        rating: 5
    },{
        title: 'Flowers for Algeron',
        author: 'Daniel Keyes',
        published: 1966,
        imgUrl: algeron,
        rating: 5
    },
    {
        title: 'Flowers for Algeron',
        author: 'Daniel Keyes',
        published: 1966,
        imgUrl: algeron,
        rating: 5
    },{
        title: 'Flowers for Algeron',
        author: 'Daniel Keyes',
        published: 1966,
        imgUrl: algeron,
        rating: 5
    },
    {
        title: 'Flowers for Algeron',
        author: 'Daniel Keyes',
        published: 1966,
        imgUrl: algeron,
        rating: 5
    },
]

const renderBooks = (books: IBookProps[]) => {
    return books.map((book) => (
        <Grid item xs={12} md={6}>
            <Book 
                title={book.title}
                author={book.author}
                imgUrl={book.imgUrl}
                rating={book.rating}
                published={book.published}
            />
        </Grid>
    ))
} 


const HomePage: React.FC = () => {
    return (
        <main className="home__main">
            <HomeHeader/>
            <ContentContainer> 
                <SearchBar/>
                <Grid className="home__books-grid" item container spacing={3} wrap="wrap">
                    {renderBooks(books)}
                </Grid>
            </ContentContainer>
        </main>
    )
}

export default HomePage
