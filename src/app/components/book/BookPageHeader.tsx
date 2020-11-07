import { AppBar, Icon, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import HeaderButton from '../utils/HeaderButton'
import '../../styles/header.css'

const BookPageHeader = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Icon className="header__icon">arrow_back_ios</Icon>
                <Typography variant="h6" color="inherit" style={{marginRight: 'auto'}} noWrap>
                    <span className="highlight-header">E</span>-Library
                </Typography>
                <HeaderButton icon="edit">Edit</HeaderButton>
            </Toolbar>
        </AppBar>
    )
}

export default BookPageHeader
