import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {observer} from 'mobx-react'
import {useUser} from './hooks/useUser'
import AuthPage from './pages/AuthPage'
import BookAddPage from './pages/BookAddPage'
import BookPage from './pages/BookPage'
import HomePage from './pages/HomePage'
import LoaderPage from './pages/LoaderPage'
import ProfilePage from './pages/ProfilePage'
import BookEditPage from './pages/BookEditPage'

const App: React.FC = () => {
    const user = useUser()

    if (user === undefined) return <LoaderPage/>

    return user ? (
        <>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/book/:id" component={BookPage}/>
                <Route exact path="/admin/book/add" component={BookAddPage} />
                <Route path="/admin/book/edit/:id" component={BookEditPage}/>
                <Route path="/profile" component={ProfilePage}/>
                <Redirect to="/"/>
            </Switch>
        </>
    ) : (
        <AuthPage />
    )
}

export default observer(App)
