import React, {useState} from 'react'
import SignInForm from '../components/forms/SignInForm'
import {Avatar, CssBaseline, Grid, Link, Paper, Typography} from '@material-ui/core'
import { useRootContext } from '../stores/RootStore'
import SignUpForm from '../components/forms/SignUpForm'
import libraryImage from '../../images/auth-page.jpeg'
import '../styles/authPage.css'

const AuthPage: React.FC = () => {
    const [isSignIn, setIsLogin] = useState(false)
    const {userStore} = useRootContext()
    
    return (
        <Grid container component="main" className="auth-page__main">
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className="auth-page__image" />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className="auth-paper">
                <div className="auth-form">
                    <Avatar/>
                    <Typography component="h1" variant="h5">    
                        {isSignIn ? 'Sign In' : 'Sign Up'}
                    </Typography>
                    {   
                        isSignIn ?
                        (
                            <SignInForm onSubmit={userStore.signIn}/>
                        ) : (
                            <SignUpForm onSubmit={userStore.signUp}/>
                        )
                    }
                    <Grid container justify="flex-end">
                        <Grid onClick={() => setIsLogin(!isSignIn)} item>
                            <Link variant="body1" style={{cursor: 'pointer'}}>
                                {
                                    isSignIn 
                                        ? 'Don\'t have an account? Sign Up'
                                        : 'Already have an account? Sign In'    
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
