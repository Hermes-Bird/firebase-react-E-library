import React, { useContext } from 'react'
import { configure } from 'mobx'
import { UserStore } from './UserStore'
import {BookStore} from './BookStore'

configure({ enforceActions: 'always' })

export class RootStore {
    userStore: UserStore
    bookStore: BookStore
    constructor() {
        this.userStore = new UserStore()
        this.bookStore = new BookStore()
        console.log('I work')
    }
}

const RootStoreContext = React.createContext(new RootStore())

export const useRootContext = () => useContext(RootStoreContext)