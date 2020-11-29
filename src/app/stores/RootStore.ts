import React, { useContext } from 'react'
import { configure } from 'mobx'
import { UserStore } from './UserStore'
import { BookStore } from './BookStore'
import { ModalStore } from './ModalStore'

configure({ enforceActions: 'always' })

export class RootStore {
    userStore: UserStore
    bookStore: BookStore
    modalStore: ModalStore
    constructor() {
        this.userStore = new UserStore()
        this.bookStore = new BookStore()
        this.modalStore = new ModalStore()
        console.log('I work')
    }
}

const RootStoreContext = React.createContext(new RootStore())

export const useRootContext = () => useContext(RootStoreContext)
