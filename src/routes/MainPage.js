/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { NavLink } from 'react-router-dom';

import SliderCategoryBlock from '../components/slider/SliderCategoryBlock';

import SliderBackground from '../assets/images/slider-background.jpg';
import AboutImage from '../assets/images/about-image.jpg';
import ProductsContainer from '../components/product/ProductsContainer';
import CategoryContainer from '../components/category/CategoryContainer';

export default function MainPage() {
    return (
        <div id="wrapper">
            <div className="container">
                <div className="row">
                    <aside className="sidebar">
                        <div className="sidebar-block">
                            <ul className="sidebar-nav">
                                <li className="sidebar-nav-item">
                                    <NavLink to="/catalog" className="sidebar-nav-link">
                                        <div className="icon processor"></div>
                                        Semiconductors
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-item">
                                    <NavLink to="/catalog" className="sidebar-nav-link">
                                        <div className="icon processor"></div>
                                        Embedded and IoT systems
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-item">
                                    <NavLink to="/catalog" className="sidebar-nav-link">
                                        <div className="icon processor"></div>
                                        Optoelectronics
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-item">
                                    <NavLink to="/catalog" className="sidebar-nav-link">
                                        <div className="icon processor"></div>
                                        Light sources
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-item">
                                    <NavLink to="/catalog" className="sidebar-nav-link">
                                        <div className="icon processor"></div>
                                        Passives
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-item">
                                    <NavLink to="/catalog" className="sidebar-nav-link">
                                        <div className="icon processor"></div>
                                        Connectors
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-item">
                                    <NavLink to="/catalog" className="sidebar-nav-link">
                                        <div className="icon processor"></div>
                                        Fuses and Circuit Breakers
                                    </NavLink>
                                </li>

                                <li className="sidebar-nav-item">
                                    <NavLink to="/catalog" className="sidebar-nav-link">
                                        <div className="icon processor"></div>
                                        Switches and Indicators
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-item">
                                    <NavLink to="/catalog" className="sidebar-nav-link">
                                        <div className="icon processor"></div>
                                        Sound Sources
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-item">
                                    <NavLink to="/catalog" className="sidebar-nav-link">
                                        <div className="icon processor"></div>
                                        Relays and Contactors
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-item">
                                    <NavLink to="/catalog" className="sidebar-nav-link">
                                        <div className="icon processor"></div>
                                        Transformers and Ferrite Cores
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-item">
                                    <NavLink to="/catalog" className="sidebar-nav-link">
                                        <div className="icon processor"></div>
                                        Pneumatics
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="sidebar-block">
                            <div className="sidebar-block-title">
                                Navigation
                            </div>
                            <ul className="sidebar-nav">
                                <li className="sidebar-nav-item">
                                    <NavLink to="/about-us" className="sidebar-nav-link" exact>
                                        <div className="icon processor"></div>
                                        About Us
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-item">
                                    <NavLink to="/delivery-and-payment" className="sidebar-nav-link" exact>
                                        <div className="icon processor"></div>
                                        Delivery and Payment
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-item">
                                    <NavLink to="/contacts" className="sidebar-nav-link" exact>
                                        <div className="icon processor"></div>
                                        Contacts
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-item">
                                    <NavLink to="/privacy-policy" className="sidebar-nav-link" exact>
                                        <div className="icon processor"></div>
                                        Privacy Policy
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="sidebar-block">
                            <div className="sidebar-block-title">
                                Infromation
                            </div>
                            <div className="sidebar-block-container">
                                © Copyright 2021 – Online-shop «RadioTechnic»
                            </div>
                        </div>
                    </aside>
                    <main className="with-sidebar">
                        <section className="slider">
                            <div className="container">
                                <div className="row">
                                    <div className="slider-image">
                                        <img src={SliderBackground} />
                                    </div>
                                    <div className="slider-content">
                                        <h1 className="slider-title">
                                            Some title over here
                                        </h1>
                                        <p className="slider-description">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                                        </p>
                                    </div>
                                    <div className="slider-featured-category">
                                        <SliderCategoryBlock />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <ProductsContainer />
                        <ProductsContainer />
                        <CategoryContainer />
                        <section className="about-container">
                            <div className="about-container-body">
                                <div className="about-container-content">
                                    <h2 className="container-title">
                                        About us
                                    </h2>
                                    <p className="container-description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                                    </p>
                                    <NavLink to="#" className="container-link">
                                        <button className="button">
                                            Contact us
                                        </button>
                                    </NavLink>
                                </div>
                                <div className="about-container-image">
                                    <img src={AboutImage} />
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
};
