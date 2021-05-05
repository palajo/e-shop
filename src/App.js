import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
import ContactsPage from './routes/ContactsPage';
import AboutPage from './routes/AboutPage';
import DeliveryPage from './routes/DeliveryPage';
import PrivacyPolicyPage from './routes/PrivacyPolicyPage';

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
                    <Route component={CheckoutPage} path="/checkout" exact />
                    <Route component={SuccessPage} path="/success" exact />

                    <Route component={UserPage} path="/user" exact />

                    <Route component={ContactsPage} path="/contacts" exact />
                    <Route component={AboutPage} path="/about-us" exact />
                    <Route component={DeliveryPage} path="/delivery-and-payment" exact />
                    <Route component={PrivacyPolicyPage} path="/privacy-policy" exact />

                </Switch>
                <CartModal />
                <LoginModal />
                <RegisterModal />
            </ScrollToTop>
        </BrowserRouter>
    )
};

export default App;
