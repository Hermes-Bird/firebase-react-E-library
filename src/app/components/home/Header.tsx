import React from 'react'
import {AppBar, Icon, Toolbar, Typography} from '@material-ui/core'
import HeaderButton from '../utils/HeaderButton'

import '../../styles/header.css'

interface IHomeHeaderProps {
    edit?: boolean
}

const HomeHeader: React.FC<IHomeHeaderProps> = ({edit}) => {
    return (
        <div>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                        <Icon fontSize="large" className="header-icon">local_library</Icon>
                        <Typography variant="h6" color="inherit" style={{marginRight: 'auto'}} noWrap>
                            E-Library
                        </Typography>
                    {
                        edit ? (
                            <HeaderButton icon="library_add">Add book</HeaderButton>
                        ) : null
                    }
                    <HeaderButton icon="account_box">Profile</HeaderButton>
                    <HeaderButton icon="exit_to_app">Logout</HeaderButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default HomeHeader
