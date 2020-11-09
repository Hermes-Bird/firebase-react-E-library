import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import {createBrowserHistory} from 'history'
import App from './app/App'
import './app/styles/index.css'


const history = createBrowserHistory()

ReactDOM.render(
    <Router history={history}>
        <App/>
    </Router>
    , document.querySelector('#root')
)
