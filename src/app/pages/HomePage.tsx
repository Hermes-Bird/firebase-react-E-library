import React, {useEffect} from 'react'
import HomeHeader from '../components/home/Header'
import SearchBar from '../components/home/SerchBar'
import { Grid } from '@material-ui/core'
import '../styles/homePage.css'
import Book, { IBookProps } from '../components/home/Book'
import ContentContainer from '../components/home/ContentContainer'
import {useRootContext} from '../stores/RootStore'
import {observer} from 'mobx-react'
import {IBook} from '../models/Book'

const renderBooks = (books: IBook[]) => {
    return books.map(({id, author, title, publicationYear, imageUrl, rating}) => (
        <Grid item xs={12} md={6} key={id}>
            <Book
                title={title}
                author={author}
                imageUrl={imageUrl}
                rating={rating}
                publicationYear={publicationYear}
                id={id}
            />
        </Grid>
    ))
}

const HomePage: React.FC = () => {
    const {userStore, bookStore} = useRootContext()
    const {searchedBooks, fetchBooks, clearTemp} = bookStore

    useEffect(() => {
        fetchBooks()
        clearTemp()
    }, [])

    return (
        <main className="home__main">
            <HomeHeader edit={userStore.user?.isAdmin} />
            <ContentContainer>
                <SearchBar />
                <div className="home__books-grid">
                    <Grid
                        item
                        container
                        wrap="wrap"
                        direction="row"
                        spacing={3}
                        className="home__books"
                    >
                        {renderBooks(searchedBooks)}
                    </Grid>
                </div>
            </ContentContainer>
        </main>
    )
}

export default observer(HomePage)
