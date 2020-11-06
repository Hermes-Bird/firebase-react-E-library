import React, {useState} from 'react'
import UserForm from '../components/auth/UserForm'
import {Avatar, CssBaseline, Grid, Link, Paper, Typography} from '@material-ui/core'
import '../styles/authPage.css'

const AuthPage: React.FC = () => {
    const [isLogin, setIsLogin] = useState(false)
    return (
        <Grid container component="main" className="auth-page__main">
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className="auth-page__image"/>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className="auth-paper">
                <div className="auth-form">
                    <Avatar/>
                    <Typography component="h1" variant="h5">
                        {isLogin ? 'Sign In' : 'Sign Up'}
                    </Typography>
                    <UserForm isLoginForm={isLogin} onSubmit={() => {}}/>
                    <Grid container justify="flex-end">
                        <Grid onClick={() => setIsLogin(!isLogin)} item>
                            <Link variant="body1" style={{cursor: 'pointer'}}>
                                {
                                    isLogin
                                        ? 'Already have an account? Sign In'
                                        : 'Don\'t have an account? Sign Up'
                                }
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </Grid>
    )
}

export default AuthPage
