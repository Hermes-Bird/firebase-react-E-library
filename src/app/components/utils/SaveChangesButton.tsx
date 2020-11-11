import { Fab } from '@material-ui/core'
import React from 'react'
import RootPortal from '../portals/RootPortal'

interface ISaveButtonProps {
    handleSubmit: () => void
    isSubmitting: boolean
    changes: boolean
}

const SaveChangesButton: React.FC<ISaveButtonProps> = ({handleSubmit, isSubmitting, changes}) => {
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
                save changes
            </Fab>
        </RootPortal>
    )
}

export default SaveChangesButton
