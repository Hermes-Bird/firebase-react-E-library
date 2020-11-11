import { AppBar, Icon, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import HeaderButton from './HeaderButton'
import '../../styles/header.css'
import { Link } from 'react-router-dom'

interface IHeaderProps {
    edit?: boolean
    editHandler?: () => void
    buttonText?: string
    icon?:string
}

const PageHeader: React.FC<IHeaderProps> = ({ edit, editHandler, buttonText='Edit', icon= 'edit'}) => {
    const clickHandler = editHandler || (() => {})
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Link to="/">
                    <Icon className="header__icon">arrow_back_ios</Icon>
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
                    <HeaderButton icon={icon} onClick={clickHandler}>
                        {buttonText}
                    </HeaderButton>
                ) : null}
            </Toolbar>
        </AppBar>
    )
}

export default PageHeader
