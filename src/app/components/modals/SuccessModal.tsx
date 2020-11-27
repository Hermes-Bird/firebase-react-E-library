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
import { history } from '../../../index'

interface ISuccessModalProps {
    open: boolean
    title: string
    content: string
}

const SuccessModal: React.FC<ISuccessModalProps> = ({
    open,
    content,
    title
}) => {
    const onClose = () => {
        history.push('/')
    }
    return (
        <div>
            <Dialog
                open={open}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth
            >
                <DialogContent className="modal__body">
                    <Icon className="modal__success-icon" fontSize="large" color="primary">
                        check_circle_outline
                    </Icon>
                    <DialogContentText id="alert-dialog-description">
                        {content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={onClose}>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default SuccessModal
