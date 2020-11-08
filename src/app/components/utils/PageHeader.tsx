import { AppBar, Icon, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import HeaderButton from './HeaderButton'
import '../../styles/header.css'

interface IHeaderProps {
    edit?: boolean
    editHandler?: () => void 
}

const PageHeader: React.FC<IHeaderProps> = ({edit, editHandler}) => {
    const clickHandler = editHandler || (() => {})
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Icon className="header__icon">arrow_back_ios</Icon>
                <Typography variant="h6" color="inherit" style={{marginRight: 'auto'}} noWrap>
                    <span className="highlight-header">E</span>-Library
                </Typography>
                {
                    edit 
                    ? <HeaderButton icon="edit" onClick={clickHandler}>Edit</HeaderButton>
                    : null
                }
            </Toolbar>
        </AppBar>
    )
}

export default PageHeader
