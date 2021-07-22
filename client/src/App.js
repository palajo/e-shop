import React, { useState } from 'react';
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
import ContactsPage from './routes/ContactsPage';
import AboutPage from './routes/AboutPage';
import DeliveryPage from './routes/DeliveryPage';
import PrivacyPolicyPage from './routes/PrivacyPolicyPage';
import UserOrdersPage from './routes/UserOrdersPage';
import UserTopicsPage from './routes/UserTopicsPage';
import UserPage from './routes/UserPage';
import TestPage from './routes/TestPage';

function App() {

    const [showCartModal, setShowCartModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    const toggleCartModal = () => {
        setShowCartModal(!showCartModal);
    };

    const toggleLoginModal = () => {
        setShowLoginModal(!showLoginModal);
    };

    const toggleRegisterModal = () => {
        setShowRegisterModal(!showRegisterModal);
    };

    return(
        <BrowserRouter>
            <ScrollToTop>
                <Header 
                    toggleCartModal={toggleCartModal}
                    toggleLoginModal={toggleLoginModal}
                />
                <Switch>
                    <Route component={MainPage} path="/" exact />

                    <Route component={CatalogPage} path="/catalog/:id" exact />
                    <Route component={CategoryPage} path="/catalog/:parentCategoryId/:categoryId" exact />
                    <Route component={ProductPage} path="/catalog/category/" exact />

                    <Route component={CheckoutPage} path="/checkout" exact />
                    <Route component={SuccessPage} path="/success" exact />

                    <Route component={UserPage} path="/user" exact />
                    <Route component={UserOrdersPage} path="/user/orders" exact />
                    <Route component={UserTopicsPage} path="/user/topics" exact />


                    <Route component={ContactsPage} path="/contacts" exact />
                    <Route component={AboutPage} path="/about-us" exact />
                    <Route component={DeliveryPage} path="/delivery-and-payment" exact />
                    <Route component={PrivacyPolicyPage} path="/privacy-policy" exact />

                    <Route component={TestPage} path="/test" exact />

                </Switch>
                <CartModal
                    showCartModal={showCartModal}
                    toggleCartModal={toggleCartModal}
                />
                <LoginModal
                    showLoginModal={showLoginModal}
                    toggleLoginModal={toggleLoginModal}
                    toggleRegisterModal={toggleRegisterModal}
                />
                <RegisterModal
                    showRegisterModal={showRegisterModal}
                    toggleRegisterModal={toggleRegisterModal}
                />
            </ScrollToTop>
        </BrowserRouter>
    )
};

export default App;
