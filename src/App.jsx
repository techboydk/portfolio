import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import {BrowserRouter} from 'react-router-dom'

const App = () => {
    
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Main />
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
