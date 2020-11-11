import { Button, Icon } from '@material-ui/core'
import React from 'react'
import { useRootContext } from '../../stores/RootStore'

interface IHeaderButtonProps {
    icon?: string
    endIcon?: boolean
    onClick?: () => void
}

const HeaderButton: React.FC<IHeaderButtonProps> = ({icon, endIcon, onClick, children}) => {
    icon = icon || ''
    onClick = onClick || (() => {})
    
    if (endIcon)
        return (
            <Button
                endIcon={<Icon>{icon}</Icon>}
                style={{ color: 'white', marginLeft: '10px' }}
                onClick={onClick}
            >
                {children}
            </Button>
        )
    else
        return (
            <Button
                startIcon={<Icon>{icon}</Icon>}
                style={{ color: 'white', marginLeft: '10px' }}
                onClick={onClick}
            >
                {children}
            </Button>
        )
}

export default HeaderButton
