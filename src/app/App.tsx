import { observer } from 'mobx-react'
import React from 'react'
import { Route } from 'react-router-dom'
import { useUser } from './hooks/useUser'
import AuthPage from './pages/AuthPage'
import BookAdminPage from './pages/BookAdminPage'
import BookPage from './pages/BookPage'
import HomePage from './pages/HomePage'
import LoaderPage from './pages/LoaderPage'
import ProfilePage from './pages/ProfilePage'


const App: React.FC = () => {
    const user = useUser()

    if (user === undefined) return <LoaderPage/>

    return user ? (
        <>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/book/:id">
                <BookPage />
            </Route>
            <Route path="/book/admin/:id">
                <BookAdminPage />
            </Route>
            <Route path="/profile">
                <ProfilePage />
            </Route>
        </>
    ) : (
        <AuthPage />
    )
}

export default observer(App)
