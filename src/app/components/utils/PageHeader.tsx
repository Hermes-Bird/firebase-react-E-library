import React from 'react'
import { AppBar, Icon, Toolbar, Typography } from '@material-ui/core'
import HeaderButton from './HeaderButton'
import { history } from '../../..'
import { observer } from 'mobx-react'
import '../../styles/header.css'

interface IHeaderProps {
    edit?: boolean
    editHandler?: () => void
    exitHandler?: () => void
    buttonText?: string
    icon?: string
}

const PageHeader: React.FC<IHeaderProps> = ({
    edit,
    editHandler,
    exitHandler,
    buttonText = 'Edit',
    icon = 'edit'
}) => {
    const clickHandler = editHandler || (() => {})
    const onExit = exitHandler || (() => history.push('/'))
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Icon className="header__icon" onClick={onExit}>
                    arrow_back_ios
                </Icon>
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

export default observer(PageHeader)
