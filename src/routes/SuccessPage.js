/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { NavLink } from 'react-router-dom'

import ProductImage from '../assets/images/product-image.png'

export function OrderTableRow() {
    return(
        <tr>
            <td className="product-image">
                <img src={ProductImage} />
            </td>
            <td className="product-title">    
                <div className="product-title-title">
                    <NavLink to="/catalog/category/product">
                        SMD transil diodes
                    </NavLink>
                    <span className="product-quantity">
                        x100
                    </span>
                </div>
                <div className="product-code">
                    #DIGI-TME
                </div>
            </td>
            <td className="product-total-price">
                $999
            </td>
        </tr>
    )
}

export default function SuccessPage() {
    return (
        <div id="wrapper">
            <div className="container narrow">
                <div className="row">
                    <main className="full-width">
                        <section className="success-container">
                            <div className="success-container-row">
                                <div className="thank-you-title">
                                    <div className="icon-box">
                                        <div className="icon checkmark"></div>
                                    </div>
                                    <h1 className="container-title">
                                        Thank you for choosing us!
                                    </h1>
                                </div>
                            </div>
                            <div className="success-container-row">
                                <h4 className="success-container-row-title">
                                    Order details:
                                </h4>
                                <table className="order-details">
                                    <tbody>
                                        <OrderTableRow />
                                        <OrderTableRow />
                                        <OrderTableRow />
                                        <OrderTableRow />
                                        <OrderTableRow />
                                    </tbody>
                                </table>
                            </div>
                            <div className="success-container-row">
                                <h4 className="success-container-row-title">
                                    Payment details:
                                </h4>
                                <table className="success-informative-table">
                                    <tbody>
                                        <tr>
                                            <th>
                                                Total:
                                            </th>
                                            <td>
                                                $2997
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Shipment:
                                            </th>
                                            <td>
                                                $50
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Total to pay:
                                            </th>
                                            <td>
                                                $3047
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="success-container-row">
                                <h4 className="success-container-row-title">
                                    Client's details:
                                </h4>
                                <table className="success-informative-table">
                                    <tbody>
                                        <tr>
                                            <th>
                                                Full Name
                                            </th>
                                            <td>
                                                Voloshyn Volodymyr
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                E-mail
                                            </th>
                                            <td>
                                                admin@leadbranding.net
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Phone number
                                            </th>
                                            <td>
                                                +38 (000) 00 00 000
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                City
                                            </th>
                                            <td>
                                                Lviv
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Department Nova Poshta
                                            </th>
                                            <td>
                                                #64
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="success-container-row justify-content-center">
                                <NavLink to="/">
                                    <button className="button">
                                        Go to mainpage
                                    </button>
                                </NavLink>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}
