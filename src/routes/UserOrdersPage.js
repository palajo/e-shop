import React from 'react'
import { NavLink } from 'react-router-dom'

export default function UserOrdersPage() {
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
                        <section className="page-container contacts-container">
                            <div className="page-container-header">
                                <div className="page-container-title">
                                    My Orders
                                </div>
                            </div>
                            <div className="page-container-body">
                                orders list
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}
