import React from 'react'
import { NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

export default function BurgerNavigation({ showBurgermenu, toggleBurgermenu, toggleNavigation, toggleLoginModal }) {
    return (
        <CSSTransition 
            in={showBurgermenu}
            timeout={400}
            classNames="burgermenu-animation"
            unmountOnExit
        >
            <div className="burger-navigation">
                <div className="burger-navigation-overlay" onClick={toggleBurgermenu}></div>
                <div className="burger-navigation-container">
                    <div className="burger-navigation-block">
                        <div className="burger-navigation-row">
                            <NavLink to="#">
                                <div className="logo">
                                    logo
                                </div>
                            </NavLink>
                            <div className="burger-close">
                                <div className="icon close" onClick={toggleBurgermenu}></div>
                            </div>
                        </div>
                    </div>
                    <div className="burger-navigation-block">
                        <ul className="burger-nav">
                            <li className="burger-nav-item">
                                <NavLink to="/" className="burger-nav-link" exact>
                                    <div className="icon home"></div>
                                    Mainpage
                                </NavLink>
                            </li>
                            <li className="burger-nav-item">
                                <div className="burger-nav-link" onClick={toggleNavigation}>
                                    <div className="icon catalog"></div>
                                    Catalog
                                </div>
                            </li>
                            <li className="burger-nav-item">
                                <div className="burger-nav-link" onClick={toggleLoginModal}>
                                    <div className="icon user"></div>
                                    My profile
                                </div>
                            </li>
                            <li className="burger-nav-item">
                                <NavLink to="/about-us" className="burger-nav-link">
                                    <div className="icon about"></div>
                                    About Us
                                </NavLink>
                            </li>
                            <li className="burger-nav-item">
                                <NavLink to="/delivery-and-payment" className="burger-nav-link">
                                    <div className="icon delivery"></div>
                                    Delivery and Payment
                                </NavLink>
                            </li>
                            <li className="burger-nav-item">
                                <NavLink to="/contacts" className="burger-nav-link">
                                    <div className="icon phone"></div>
                                    Contacts
                                </NavLink>
                            </li>
                            <li className="burger-nav-item">
                                <NavLink to="/privacy-policy" className="burger-nav-link">
                                    <div className="icon privacy-policy"></div>
                                    Privacy Policy
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}
