import React from 'react'
import ReactDOM from 'react-dom'


const RootPortal: React.FC<{}> = ({children}) => {
    return (
        ReactDOM.createPortal(children, document.body)
    )
}

export default RootPortal
