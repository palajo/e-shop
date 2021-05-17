import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import OrderModal from '../components/user/OrderModal'

export function OrderTableRow({ toggleOrderModal }) {
    return(
        <tr>
            <td className="order-id">
                <label>
                    Order ID:
                </label>
                <NavLink to="#" onClick={toggleOrderModal}>
                    #213
                </NavLink>
            </td>
            <td>
                <label>
                    Date:
                </label>
                23.04.2021                                             
            </td>
            <td>
                <label>
                    Status:
                </label>
                Being delivered                                           
            </td>
            <td>
                <label>
                    Total to pay:
                </label>
                $1099.99                                           
            </td>
        </tr>
    )
}

export default function UserOrdersPage() {
    
    const [showOrderModal, setShowOrderModal] = useState(false);

    const toggleOrderModal = () => {
        setShowOrderModal(!showOrderModal);
    };

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
                                    My Orders
                                </div>
                            </div>
                            <div className="page-container-body no-padding">
                                <table className="orders">
                                    <tbody>
                                        <OrderTableRow 
                                            toggleOrderModal={toggleOrderModal}
                                        />
                                        <OrderTableRow 
                                            toggleOrderModal={toggleOrderModal}
                                        />
                                        <OrderTableRow 
                                            toggleOrderModal={toggleOrderModal}
                                        />
                                        <OrderTableRow 
                                            toggleOrderModal={toggleOrderModal}
                                        />
                                        <OrderTableRow 
                                            toggleOrderModal={toggleOrderModal}
                                        />
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
            <OrderModal 
                showOrderModal={showOrderModal}
                toggleOrderModal={toggleOrderModal}
            />
        </div>
    )
}
