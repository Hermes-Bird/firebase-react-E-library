import firebase from 'firebase'
import { useEffect, useState } from 'react'

export const useUser = () => {
    const [user, setUser]: [any, any] = useState(undefined)


    useEffect(() => {
        setTimeout(() => {
            firebase.auth().onAuthStateChanged(user => {
                if (user) setUser(user)
                else setUser(null)
            })
        }, 2200)
    })

    return user
}
