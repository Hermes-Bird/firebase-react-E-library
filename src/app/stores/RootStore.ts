import React, { useContext } from 'react'
import { configure } from 'mobx'
import { UserStore } from './UserStore'

configure({ enforceActions: 'always' })

export class RootStore {
    userStore: UserStore
    constructor() {
        this.userStore = new UserStore()
        console.log('I work')
    }
}

const RootStroreContext = React.createContext(new RootStore())

export const useRootContext = () => useContext(RootStroreContext)