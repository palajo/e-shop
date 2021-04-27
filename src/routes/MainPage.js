import React from 'react';
import { NavLink } from 'react-router-dom';
import CategoryBlock from '../components/category/CategoryBlock';
import ProductBlock from '../components/product/ProductBlock';

export default function MainPage() {
    return (
        <div id="wrapper">
            <div className="container">
                <div className="row">
                    <aside className="sidebar">
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
                    </aside>
                    <main className="content">
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
                    </main>
                </div>
            </div>
        </div>
    )
};
