import React from 'react'
import {AppBar, Icon, Toolbar, Typography} from '@material-ui/core'
import HeaderButton from '../utils/HeaderButton'

import '../../styles/header.css'

const HomeHeader: React.FC = () => {
    return (
        <div>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                        <Icon fontSize="large" className="header-icon">local_library</Icon>
                        <Typography variant="h6" color="inherit" style={{marginRight: 'auto'}} noWrap>
                            E-Library
                        </Typography>
                    <HeaderButton icon="account_box">Profile</HeaderButton>
                    <HeaderButton icon="favorite_border">Favorite</HeaderButton>
                    <HeaderButton icon="exit_to_app">Logout</HeaderButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default HomeHeader
