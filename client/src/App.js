import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import MainPage from './routes/MainPage'
import ProductPage from './routes/api/Product'


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={MainPage} path="/" exact />
                <Route component={ProductPage} path="/product" exact />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
