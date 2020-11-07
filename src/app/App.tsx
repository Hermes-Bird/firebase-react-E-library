import React from 'react';
import AuthPage from './pages/AuthPage'
import BookPage from './pages/BookPage';
import HomePage from './pages/HomePage'


const App: React.FC = (): JSX.Element => {
    return (
        <>
            {/* <AuthPage/> */}
            {/* <HomePage/> */}
            <BookPage/>
        </>
    );
}

export default App;
