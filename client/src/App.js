import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import MainPage from './routes/MainPage'
import CatalogPage from './routes/CatalogPage'
import CategoryPage from './routes/CategoryPage'
import ProductPage from './routes/ProductPage'
import SearchPage from './routes/SearchPage'
import Header from './components/header'


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route component={MainPage} path="/" exact />
                <Route component={CatalogPage} path="/catalog" exact />
                <Route component={CategoryPage} path="/category" exact />
                <Route component={ProductPage} path="/product" exact />
                <Route component={SearchPage} path="/search" exact />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
