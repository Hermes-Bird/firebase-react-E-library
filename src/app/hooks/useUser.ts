import firebase from 'firebase'
import { useEffect, useState } from 'react'
import {useRootContext} from '../stores/RootStore'

export const useUser = () => {
    const [user, setUser]: [any, any] = useState(undefined)
    const {userStore} = useRootContext()

    useEffect(() => {
        setTimeout(() => {
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    setUser(user)
                    userStore.getUser()
                }

                else setUser(null)
            })
        }, 2200)
    })

    return user
}
