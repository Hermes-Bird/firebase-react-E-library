import React from 'react'
import {AppBar, Icon, Toolbar, Typography} from '@material-ui/core'
import HeaderButton from '../utils/HeaderButton'

import '../../styles/header.css'
import { Link } from 'react-router-dom'
import { useRootContext } from '../../stores/RootStore'

interface IHomeHeaderProps {
    edit?: boolean
}

const HomeHeader: React.FC<IHomeHeaderProps> = ({edit}) => {
    const {userStore} = useRootContext()

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
                            <Link to="/admin/book/1">
                                <HeaderButton icon="library_add">Add book</HeaderButton>
                            </Link>
                        ) : null
                    }
                    <Link to="/profile">
                        <HeaderButton icon="account_box">Profile</HeaderButton>
                    </Link>
                    <HeaderButton onClick={userStore.signOut} icon="exit_to_app">Logout</HeaderButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default HomeHeader
