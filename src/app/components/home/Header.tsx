import React from 'react'
import {AppBar, Icon, Toolbar, Typography} from '@material-ui/core'
import Button from '@material-ui/core/Button'

const HeaderButton: React.FC<{icon?:string}> = (props) => {
    let icon = props.icon || ''
    return (
        <Button startIcon={<Icon>{icon}</Icon>} style={{color: 'white', marginLeft: '10px'}}>{props.children}</Button>
    )
}

const highLightColor = {
    color: '#00FFD7',
    marginBottom: '6px'
}

const Header: React.FC = () => {
    return (
        <div>
            <AppBar position="static" color="primary">
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

export default Header
