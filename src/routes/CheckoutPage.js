import React from 'react'
import { NavLink } from 'react-router-dom'
import CartProductsTable from '../components/cart/CartProductsTable'
import CheckoutForm from '../components/checkout/CheckoutForm'

export default function CheckoutPage() {
    return (
        <div id="wrapper">
            <div className="container">
                <div className="row">
                    <main className="full-width">
                        <section className="breadcrumbs-container">
                            <ul className="breadcrumbs">
                                <li className="breadcrumbs-item">
                                    <NavLink to="/" className="breadcrumbs-link" exact>
                                        Mainpage
                                    </NavLink>
                                </li>
                                <li className="breadcrumbs-item">
                                    <NavLink to="/checkout" className="breadcrumbs-link" exact>
                                        Checkout
                                    </NavLink>
                                </li>
                            </ul>
                        </section>
                        <section className="checkout-container">
                            <div className="checkout-form-container">
                                <div className="checkout-form-container-header">
                                    <div className="checkout-form-container-title">
                                        Checkout
                                    </div>
                                </div>
                                <div className="checkout-form-container-body">
                                    <CartProductsTable />
                                    <CheckoutForm />
                                </div>
                            </div>
                            <div className="checkout-total-container">
                                <div className="checkout-total-container-header">
                                    <div className="checkout-total-container-title">
                                        Total
                                    </div>
                                </div>
                                <div className="checkout-total-container-body">
                                    <div className="checkout-total-container-block">
                                        <table className="totals">
                                            <tbody>
                                                <tr>
                                                    <th>
                                                        Total:
                                                    </th>
                                                    <td>
                                                        $9576.32
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        Shipping:
                                                    </th>
                                                    <td>
                                                        $34
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="checkout-total-container-block">
                                        <div className="payment">
                                            Pay on delivery
                                        </div>
                                    </div>
                                    <div className="checkout-total-container-block">
                                        <div className="total-to-pay">
                                            <label>Total to pay:</label>
                                            $9606.32
                                        </div>
                                        <NavLink to="/success">
                                            <button className="button">
                                                Confirm order
                                            </button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}
