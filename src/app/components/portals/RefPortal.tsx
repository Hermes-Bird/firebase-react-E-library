import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'

interface IRefPortalProps {
    containerRef: React.RefObject<Element>
}

const RefPortal: React.FC<IRefPortalProps> = ({children, containerRef}) => {
    const [container, setContainer] = useState(containerRef.current)

    useEffect(() => {
        setContainer(containerRef.current)
    }, [containerRef])

    return (
        containerRef.current ?
        ReactDOM.createPortal(
            children,
            containerRef.current
        ) : null
    )
}

export default RefPortal
