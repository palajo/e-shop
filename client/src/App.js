import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import MainPage from './routes/MainPage'
import ProductPage from './routes/api/Product'
import CategoriesPage from './routes/api/Categories'


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={MainPage} path="/" exact />
                <Route component={ProductPage} path="/product" exact />
                <Route component={CategoriesPage} path="/categories" exact />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
