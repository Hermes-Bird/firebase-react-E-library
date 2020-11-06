import React from 'react'
import Header from '../components/home/Header'
import '../styles/homePage.css'
import SearchBar from '../components/home/SerchBar'
import {Container} from '@material-ui/core'

const HomePage: React.FC = () => {
    return (
        <>
            <Header/>
            <Container>
                <SearchBar/>
            </Container>
        </>
    )
}

export default HomePage
