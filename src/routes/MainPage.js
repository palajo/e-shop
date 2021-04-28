/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { NavLink } from 'react-router-dom';

import CategoryBlock from '../components/category/CategoryBlock';
import ProductBlock from '../components/product/ProductBlock';
import SliderCategoryBlock from '../components/slider/SliderCategoryBlock';

import SliderBackground from '../assets/images/slider-background.jpg';
import AboutImage from '../assets/images/about-image.jpg';

export default function MainPage() {
    return (
        <div id="wrapper">
            <div className="container">
                <div className="row">
                    <aside className="sidebar">
                        <div className="sidebar-block">
                            <ul className="sidebar-nav">
                                <li className="sidebar-nav-item">
                                    <NavLink to="#" className="sidebar-nav-link">
                                        <div className="icon processor"></div>
                                        Semiconductors
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-item">
                                    <NavLink to="#" className="sidebar-nav-link">
                                        <div className="icon processor"></div>
                                        Embedded and IoT systems
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-item">
                                    <NavLink to="#" className="sidebar-nav-link">
                                        <div className="icon processor"></div>
                                        Optoelectronics
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-item">
                                    <NavLink to="#" className="sidebar-nav-link">
                                        <div className="icon processor"></div>
                                        Light sources
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-item">
                                    <NavLink to="#" className="sidebar-nav-link">
                                        <div className="icon processor"></div>
                                        Passives
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-item">
                                    <NavLink to="#" className="sidebar-nav-link">
                                        <div className="icon processor"></div>
                                        Connectors
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-item">
                                    <NavLink to="#" className="sidebar-nav-link">
                                        <div className="icon processor"></div>
                                        Fuses and Circuit Breakers
                                    </NavLink>
                                </li>

                                <li className="sidebar-nav-item">
                                    <NavLink to="#" className="sidebar-nav-link">
                                        <div className="icon processor"></div>
                                        Switches and Indicators
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-item">
                                    <NavLink to="#" className="sidebar-nav-link">
                                        <div className="icon processor"></div>
                                        Sound Sources
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-item">
                                    <NavLink to="#" className="sidebar-nav-link">
                                        <div className="icon processor"></div>
                                        Relays and Contactors
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-item">
                                    <NavLink to="#" className="sidebar-nav-link">
                                        <div className="icon processor"></div>
                                        Transformers and Ferrite Cores
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-item">
                                    <NavLink to="#" className="sidebar-nav-link">
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
                                    <NavLink to="#" className="sidebar-nav-link">
                                        <div className="icon processor"></div>
                                        About Us
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-item">
                                    <NavLink to="#" className="sidebar-nav-link">
                                        <div className="icon processor"></div>
                                        All Brands
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-item">
                                    <NavLink to="#" className="sidebar-nav-link">
                                        <div className="icon processor"></div>
                                        Delivery and Payment
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-item">
                                    <NavLink to="#" className="sidebar-nav-link">
                                        <div className="icon processor"></div>
                                        Contacts
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-item">
                                    <NavLink to="#" className="sidebar-nav-link">
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
                    <main className="content">
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
                        <section className="products-container">
                            <div className="products-container-header">
                                <div className="products-container-title">
                                    <div className="icon processor"></div>
                                    Popular products
                                </div>
                                <NavLink to="#" className="link-more">
                                    Show more
                                    <div className="icon menu-arrow-right"></div>
                                </NavLink>
                            </div>
                            <div className="products-container-body">
                                <ProductBlock />
                                <ProductBlock />
                                <ProductBlock />
                                <ProductBlock />
                                <ProductBlock />
                            </div>
                        </section>
                        <section className="products-container">
                            <div className="products-container-header">
                                <div className="products-container-title">
                                    <div className="icon processor"></div>
                                    Recommended products
                                </div>
                                <NavLink to="#" className="link-more">
                                    Show more
                                    <div className="icon menu-arrow-right"></div>
                                </NavLink>
                            </div>
                            <div className="products-container-body">
                                <ProductBlock />
                                <ProductBlock />
                                <ProductBlock />
                                <ProductBlock />
                                <ProductBlock />
                            </div>
                        </section>
                        <section className="products-container">
                            <div className="products-container-header">
                                <div className="products-container-title">
                                    <div className="icon processor"></div>
                                    Recommended categories
                                </div>
                            </div>
                            <div className="products-container-body">
                                <CategoryBlock />
                                <CategoryBlock />
                                <CategoryBlock />
                                <CategoryBlock />
                                <CategoryBlock />
                            </div>
                        </section>
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
