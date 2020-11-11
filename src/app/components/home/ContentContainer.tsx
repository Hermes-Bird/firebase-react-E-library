import { Container } from '@material-ui/core'
import React from 'react'
import '../../styles/homePage.css'

const ContentContainer: React.FC<{}> = ({children}) => {
    const reactNode = children ? children : '' 
    return (
        <Container className="home__container">{reactNode}</Container>
    )
}

export default ContentContainer
