/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { NavLink } from 'react-router-dom'

import ProductImage from '../../../assets/images/product-image.png'

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
                                    Order #247:
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
                                                <div>
                                                    Total
                                                </div>
                                            </th>
                                            <td>
                                                <div>
                                                    $2997
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <div>
                                                    Shipment
                                                </div>
                                            </th>
                                            <td>
                                                <div>
                                                    $50
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <div>
                                                    Total to pay
                                                </div>
                                            </th>
                                            <td>
                                                <div>
                                                    $3047
                                                </div>
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
                                                <div>
                                                    Full Name
                                                </div>
                                            </th>
                                            <td>
                                                <div>
                                                    Voloshyn Volodymyr
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <div>
                                                    E-mail
                                                </div>
                                            </th>
                                            <td>
                                                <div>
                                                    admin@leadbranding.net
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <div>
                                                    Phone number
                                                </div>
                                            </th>
                                            <td>
                                                <div>
                                                    +38 (000) 00 00 000
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <div>
                                                    City
                                                </div>
                                            </th>
                                            <td>
                                                <div>
                                                    Lviv
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <div>
                                                    Department Nova Poshta
                                                </div>
                                            </th>
                                            <td>
                                                <div>
                                                    #64
                                                </div>
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
