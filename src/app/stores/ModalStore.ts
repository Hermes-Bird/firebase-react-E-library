import { action, makeObservable, observable } from 'mobx'

export enum ModalTypes {
    successUpdate,
    successAdd,
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
    error = 'error_outline'
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
    }
}

export class ModalStore {
    @observable modalText: string = ''
    @observable openModal: boolean = false
    @observable iconColor: colors = colors.primary
    @observable icon: icons = icons.success
    @observable isTwoButtons: boolean = false 

    constructor() {
        makeObservable(this)
    }

    @action openModalWindow = (modalType: ModalTypes): void => {
        const { text, color, icon } = modal[modalType]
        this.modalText = text
        this.iconColor = color
        this.icon = icon
        this.isTwoButtons = modalType === ModalTypes.discardWarning ? true : false

        this.openModal = true
    }

    @action closeModal = (): void => {
        this.openModal = false
    }
}
