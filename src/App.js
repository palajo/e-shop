import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import $ from 'jquery';

import './assets/styles/styles.scss';
import Header from './components/header/Header';

import MainPage from './routes/MainPage';
import CatalogPage from './routes/CatalogPage';
import CategoryPage from './routes/CategoryPage';
import ScrollToTop from './ScrollToTop';
import ProductPage from './routes/ProductPage';
import CheckoutPage from './routes/CheckoutPage';
import SuccessPage from './routes/SuccessPage';

import CartModal from './components/cart/CartModal';
import LoginModal from './components/user/LoginModal';
import RegisterModal from './components/user/RegisterModal';
import UserPage from './routes/UserPage';

function App() {

    useEffect(() => {
        $(document).ready(function() {
            $('[data-toggle="modal"]').click(function() {
                var modalId = $(this).attr('data-target').toString();
                $('#' + modalId + '.modal').fadeIn(0);
            });

            $('.modal-close, .modal-overlay').click(function() {
                $(this).closest('.modal').fadeOut(100);
            });
        })
    }, []);

    return(
        <BrowserRouter>
            <ScrollToTop>
                <Header />
                <Switch>
                    <Route component={MainPage} path="/" exact />
                    <Route component={CatalogPage} path="/catalog" exact />
                    <Route component={CategoryPage} path="/catalog/category" exact />
                    <Route component={ProductPage} path="/catalog/category/product" exact />
                    <Route component={CheckoutPage} path="/checkout" exact />
                    <Route component={SuccessPage} path="/success" exact />

                    <Route component={UserPage} path="/user" exact />

                </Switch>
                <CartModal />
                <LoginModal />
                <RegisterModal />
            </ScrollToTop>
        </BrowserRouter>
    )
};

export default App;
