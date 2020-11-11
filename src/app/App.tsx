import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {observer} from 'mobx-react'
import {useUser} from './hooks/useUser'
import AuthPage from './pages/AuthPage'
import BookAdminPage, {bookPageType} from './pages/BookAdminPage'
import BookPage from './pages/BookPage'
import HomePage from './pages/HomePage'
import LoaderPage from './pages/LoaderPage'
import ProfilePage from './pages/ProfilePage'

const App: React.FC = () => {
    const user = useUser()

    if (user === undefined) return <LoaderPage/>

    return user ? (
        <>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/book/:id">
                    <BookPage />
                </Route>
                <Route exact path="/admin/book/add">
                    <BookAdminPage type={bookPageType.add}/>
                </Route>
                <Route path="/admin/book/edit/:id">
                    <BookAdminPage type={bookPageType.edit}/>
                </Route>
                <Route path="/profile">
                    <ProfilePage />
                </Route>
                <Redirect to="/"/>
            </Switch>
        </>
    ) : (
        <AuthPage />
    )
}

export default observer(App)
