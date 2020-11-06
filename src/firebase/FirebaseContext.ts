import {createContext, useContext} from 'react'
import Firebase from './Firebase'

export const FirebaseContext = createContext(null)
export const useFirebase = () => useContext(FirebaseContext)