import { Button, Icon } from '@material-ui/core'
import React from 'react'

const HeaderButton: React.FC<{ icon?: string; endIcon?: boolean }> = props => {
    let icon = props.icon || ''
    console.log(props)
    if (props.endIcon)
        return (
            <Button
                endIcon={<Icon>{icon}</Icon>}
                style={{ color: 'white', marginLeft: '10px' }}
            >
                {props.children}
            </Button>
        )
    else
        return (
            <Button
                startIcon={<Icon>{icon}</Icon>}
                style={{ color: 'white', marginLeft: '10px' }}
            >
                {props.children}
            </Button>
        )
}

export default HeaderButton
