import React from 'react'
import { Fab } from '@material-ui/core'
import RootPortal from '../portals/RootPortal'

interface ISaveButtonProps {
    handleSubmit: () => void
    isSubmitting: boolean
    changes: boolean
    buttonText?: string
}

const SaveChangesButton: React.FC<ISaveButtonProps> = ({handleSubmit, isSubmitting, changes, buttonText}) => {
    return (
        <RootPortal>
            <Fab
                onClick={handleSubmit}
                variant="extended"
                color="primary"
                type="submit"
                className="profile__save-changes"
                style={{display: changes ? 'inline' : 'none'}}
                disabled={isSubmitting}
            >
                {buttonText || 'save changes' }
            </Fab>
        </RootPortal>
    )
}

export default SaveChangesButton
