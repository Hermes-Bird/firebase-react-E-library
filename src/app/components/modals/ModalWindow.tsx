import React from 'react'
import {
    Dialog,
    Button,
    DialogActions,
    DialogContent,
    DialogContentText,
    Icon
} from '@material-ui/core'
import { history } from '../../../index'
import { useRootContext } from '../../stores/RootStore'
import { observer } from 'mobx-react'

const SuccessModal = () => {
    const {
        modalText,
        isWarningModal,
        isDeleteAskModal,
        icon,
        iconColor,
        openModal,
        closeModal,
        modalCallback
    } = useRootContext().modalStore

    const onClose = () => {
        closeModal()
        history.push('/')
    }

    console.log(useRootContext().modalStore)

    let okButtonText = 'OK'
    if (isWarningModal) okButtonText = 'exit'
    else if (isDeleteAskModal) okButtonText = 'delete'

    console.log(isDeleteAskModal)

    return (
        <div>
            <Dialog
                open={openModal}
                onClose={
                    !isWarningModal && !isDeleteAskModal ? onClose : closeModal
                }
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth
            >
                <DialogContent className="modal__body">
                    <Icon
                        className="modal__success-icon"
                        fontSize="large"
                        color={iconColor}
                    >
                        {icon}
                    </Icon>
                    <DialogContentText id="alert-dialog-description">
                        {modalText}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {isWarningModal || isDeleteAskModal ? (
                        <Button color="primary" onClick={closeModal}>
                            Cancel
                        </Button>
                    ) : null}
                    <Button color="primary" onClick={modalCallback || onClose}>
                        {okButtonText}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default observer(SuccessModal)
