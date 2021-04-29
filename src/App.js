import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './assets/styles/styles.scss';

import Header from './components/header/Header';

import MainPage from './routes/MainPage';
import CatalogPage from './routes/CatalogPage';
import CategoryPage from './routes/CategoryPage';
import ScrollToTop from './ScrollToTop';
import ProductPage from './routes/ProductPage';

function App() {
    return(
        <BrowserRouter>
            <ScrollToTop>
                <Header />
                <Switch>
                    <Route component={MainPage} path="/" exact />
                    <Route component={CatalogPage} path="/catalog" exact />
                    <Route component={CategoryPage} path="/catalog/category" exact />
                    <Route component={ProductPage} path="/catalog/category/product" exact />
                </Switch>
            </ScrollToTop>
        </BrowserRouter>
    )
};

export default App;
