import React from 'react'
import {
    Dialog,
    Button,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Icon
} from '@material-ui/core'

interface IModalProps {
    open: boolean
    headerText: string
    content: string
    onSubmit: Function
    onReject?: Function
    error?: boolean
}

const Modal: React.FC<IModalProps> = ({ open, headerText, content }) => {
    return (
        <div>
            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                aria-modal={true}
            >
                <DialogTitle id="alert-dialog-title">{headerText}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="primary">Save</Button>
                    <Button color="primary" autoFocus>
                        Leave
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Modal
