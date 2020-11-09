import { AppBar, Icon, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import HeaderButton from './HeaderButton'
import '../../styles/header.css'
import { Link } from 'react-router-dom'

interface IHeaderProps {
    edit?: boolean
    editHandler?: () => void
}

const PageHeader: React.FC<IHeaderProps> = ({ edit, editHandler }) => {
    const clickHandler = editHandler || (() => {})
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Link to="/">
                    <Icon color="default" className="header__icon">arrow_back_ios</Icon>
                </Link>
                <Typography
                    variant="h6"
                    color="inherit"
                    style={{ marginRight: 'auto' }}
                    noWrap
                >
                    <span className="highlight-header">E</span>-Library
                </Typography>
                {edit ? (
                    <HeaderButton icon="edit" onClick={clickHandler}>
                        Edit
                    </HeaderButton>
                ) : null}
            </Toolbar>
        </AppBar>
    )
}

export default PageHeader
