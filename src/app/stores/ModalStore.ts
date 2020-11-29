import { action, makeObservable, observable } from 'mobx'
import { history } from '../..'

export enum ModalTypes {
    successUpdate,
    successAdd,
    deleteAsk,
    deleteSuccess,
    discardWarning,
    error
}

enum colors {
    primary = 'primary',
    warning = 'secondary',
    error = 'error'
}

enum icons {
    success = 'check_circle_outline',
    warning = 'help_outline',
    error = 'error_outline',
    delete = 'delete_outline'
}

interface IModalWindowProps {
    text: string
    icon: icons
    color: colors
}

type modalSets = {
    [key in ModalTypes]: IModalWindowProps
}

const modal: modalSets = {
    [ModalTypes.successUpdate]: {
        text: 'Information successfully updated!',
        icon: icons.success,
        color: colors.primary
    },
    [ModalTypes.successAdd]: {
        text: "You're book successfully added!",
        icon: icons.success,
        color: colors.primary
    },
    [ModalTypes.discardWarning]: {
        text: 'Are you sure you want to exit without saving?',
        icon: icons.warning,
        color: colors.warning
    },
    [ModalTypes.error]: {
        text: 'Something goes wrong, try it later...',
        icon: icons.error,
        color: colors.error
    },
    [ModalTypes.deleteAsk]: {
        text: 'Are you sure you want to delete this book?',
        icon: icons.delete,
        color: colors.error
    },
    [ModalTypes.deleteSuccess]: {
        text: 'Book deleted successfully!',
        icon: icons.delete,
        color: colors.primary
    }
}

export class ModalStore {
    @observable modalText: string = ''
    @observable openModal: boolean = false
    @observable iconColor: colors = colors.primary
    @observable icon: icons = icons.success
    @observable isWarningModal: boolean = false 
    @observable isDeleteAskModal: boolean = false
    @observable discardWarning: boolean = false
    @observable modalCallback: (() => void) | null = null     

    constructor() {
        makeObservable(this)
    }

    @action openModalWindow = (modalType: ModalTypes): void => {
        this.closeModal()

        const { text, color, icon } = modal[modalType]
        this.modalText = text
        this.iconColor = color
        this.icon = icon
        this.isWarningModal = modalType === ModalTypes.discardWarning ? true : false

        this.openModal = true
    }

    @action closeModal = (): void => {
        this.openModal = false
        this.isDeleteAskModal = false
        this.isWarningModal = false
        this.modalCallback = null
    }

    @action openDeleteAskModal = (callback: () => void) => {
        this.modalCallback = callback
        this.isDeleteAskModal = true
        
        const { text, color, icon } = modal[ModalTypes.deleteAsk]
        this.modalText = text
        this.iconColor = color
        this.icon = icon

        this.openModal = true
    }

    @action setDiscardWarning = (discWarning: boolean) => {
        this.discardWarning = discWarning
    }
}
