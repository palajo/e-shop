import React from 'react'
import { NavLink } from 'react-router-dom'

export default function UserPage() {
    return (
        <div id="wrapper">
            <div className="container">
                <div className="row">
                    <aside className="sidebar user-sidebar">
                        <div className="sidebar-block">
                            <ul className="sidebar-nav">
                                <li className="sidebar-nav-item">
                                    <NavLink to="/user" className="sidebar-nav-link" exact>
                                        <div className="icon processor"></div>
                                        <div>
                                            My profile<br />
                                            <span>admin@leadbranding.net</span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-item">
                                    <NavLink to="/user/orders" className="sidebar-nav-link" exact>
                                        <div className="icon processor"></div>
                                        My orders
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-item">
                                    <NavLink to="/user/topics" className="sidebar-nav-link" exact>
                                        <div className="icon processor"></div>
                                        My topics
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </aside>
                    <main className="with-sidebar">
                        <section className="page-container user-container">
                            <div className="page-container-header">
                                <div className="page-container-title">
                                    My Profile
                                </div>
                                <div className="edit-user-information">
                                    <div className="icon edit"></div>
                                </div>
                            </div>
                            <div className="page-container-body no-padding">
                                <form className="checkout-form">
                                    <div className="form-row">
                                        <h4 className="form-row-title">
                                            <div className="icon user"></div>
                                            Personal information
                                        </h4>
                                        <div className="form-block">
                                            <label htmlFor="user-name">
                                                Full name
                                            </label>
                                            <input type="text" className="form-text" id="user-name" name="user-name" value="Pryshtash Volodymyr" />
                                        </div>
                                        <div className="form-block">
                                            <label htmlFor="user-phone">
                                                Phone number
                                            </label>
                                            <input type="text" className="form-text" id="user-phone" name="user-phone" value="+38 (000) 00 00 000" />
                                        </div>
                                        <div className="form-block">
                                            <label htmlFor="user-email">
                                                E-mail
                                            </label>
                                            <input type="text" className="form-text" id="user-email" name="user-email" value="admin@leadbranding.net" />
                                        </div>
                                        <div className="form-block">
                                            <label htmlFor="user-company">
                                                Company Title
                                            </label>
                                            <input type="text" className="form-text" id="user-company" name="user-company" value="Not assigned" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <h4 className="form-row-title">
                                            <div className="icon delivery"></div>
                                            Delivery information
                                        </h4>
                                        <div className="form-block">
                                            <label htmlFor="delivery-name">
                                                Full Name
                                            </label>
                                            <input type="text" className="form-text" id="delivery-name" name="delivery-name" value="Pryshtash Volodymyr" />
                                        </div>
                                        <div className="form-block">
                                            <label htmlFor="delivery-phone">
                                                Phone
                                            </label>
                                            <input type="text" className="form-text" id="delivery-phone" name="delivery-phone" value="+38 (000) 00 00 000" />
                                        </div>
                                        <div className="form-block">
                                            <label htmlFor="delivery-city">
                                                City
                                            </label>
                                            <input type="text" className="form-text" id="delivery-city" name="delivery-city" value="Lviv" />
                                        </div>
                                        <div className="form-block">
                                            <label htmlFor="delivery-department">
                                                Nova Poshta department
                                            </label>
                                            <input type="text" className="form-text" id="delivery-department" name="delivery-department" value="#76" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <h4 className="form-row-title">
                                            <div className="icon password"></div>
                                            Change your password
                                        </h4>
                                        <div className="form-block">
                                            <label htmlFor="user-password">
                                                Your password
                                            </label>
                                            <input type="password" className="form-text" id="user-password" name="user-password" value="•••••••••••••••" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}
