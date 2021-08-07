import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './assets/styles/styles.scss';

import ScrollToTop from './ScrollToTop';
import Header from './components/header/Header';

import MainPage from './routes/pages/MainPage';
import AboutPage from './routes/pages/AboutPage';
import ContactsPage from './routes/pages/ContactsPage';
import DeliveryPage from './routes/pages/DeliveryPage';
import PrivacyPolicyPage from './routes/pages/PrivacyPolicyPage';

import CatalogPage from './routes/shop/CatalogPage';
import CategoryPage from './routes/shop/CategoryPage';
import ProductPage from './routes/shop/ProductPage';

import CartModal from './components/shop/cart/modals/CartModal';
import CheckoutPage from './routes/shop/cart/CheckoutPage';
import SuccessPage from './routes/shop/cart/SuccessPage';

import LoginModal from './components/shop/account/modals/LoginModal';
import RegisterModal from './components/shop/account/modals/RegisterModal';
import UserPage from './routes/shop/account/UserPage';
import UserOrdersPage from './routes/shop/account/UserOrdersPage';
import UserTopicsPage from './routes/shop/account/UserTopicsPage';

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
        <main>
          <Switch>
            <Route component={MainPage} path="/" exact />
            <Route component={ContactsPage} path="/contacts" exact />
            <Route component={AboutPage} path="/about-us" exact />
            <Route component={DeliveryPage} path="/delivery-and-payment" exact />
            <Route component={PrivacyPolicyPage} path="/privacy-policy" exact />

            <Route component={CatalogPage} path="/catalog/:id" exact />
            <Route component={CategoryPage} path="/catalog/:parentCategoryId/:categoryId" exact />
            <Route component={ProductPage} path="/product/:productId" exact />

            <Route component={CheckoutPage} path="/checkout" exact />
            <Route component={SuccessPage} path="/success" exact />

            <Route component={UserPage} path="/user" exact />
            <Route component={UserOrdersPage} path="/user/orders" exact />
            <Route component={UserTopicsPage} path="/user/topics" exact />
          </Switch>
        </main>
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
  );
}

export default App;
