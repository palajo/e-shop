import React from 'react'
import { NavLink } from 'react-router-dom'

export default function AboutPage() {
    return (
        <div id="wrapper">
            <div className="container">
                <div className="row">
                    <section className="breadcrumbs-container">
                        <ul className="breadcrumbs">
                            <li className="breadcrumbs-item">
                                <NavLink to="/" className="breadcrumbs-link" exact>
                                    Mainpage
                                </NavLink>
                            </li>
                            <li className="breadcrumbs-item">
                                <NavLink to="/about-us" className="breadcrumbs-link" exact>
                                    About us
                                </NavLink>
                            </li>
                        </ul>
                    </section>
                    <aside className="sidebar info-sidebar">
                        <div className="sidebar-block">
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
                    </aside>
                    <main className="content">
                        <section className="page-container">
                            <div className="page-container-header">
                                <div className="page-container-title">
                                    About us
                                </div>
                            </div>
                            <div className="page-container-body">
                                <div className="paragraph-block">
                                    <h4 className="paragraph-title">
                                        Paragraph First:
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                                    </p>
                                </div>
                                <div className="paragraph-block">
                                    <h4 className="paragraph-title">
                                        Paragraph Second:
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                                    </p>
                                </div>
                                <div className="paragraph-block">
                                    <h4 className="paragraph-title">
                                        Paragraph Third:
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                                    </p>
                                    <ul>
                                        <div className="ul-title">
                                            Some menu title:
                                        </div>
                                        <li>
                                            Punct number one
                                        </li>
                                        <li>
                                            Punct number two
                                        </li>
                                        <li>
                                            Punct number three
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}
