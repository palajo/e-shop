/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { NavLink } from 'react-router-dom'

import ProductImage from '../assets/images/product-image.png'

export default function ProductPage() {
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
                                <NavLink to="/catalog" className="breadcrumbs-link" exact>
                                    Catalog
                                </NavLink>
                            </li>
                            <li className="breadcrumbs-item">
                                <NavLink to="/catalog/category" className="breadcrumbs-link" exact>
                                    Category
                                </NavLink>
                            </li>
                            <li className="breadcrumbs-item">
                                <NavLink to="/catalog/category/product" className="breadcrumbs-link" exact>
                                    Product
                                </NavLink>
                            </li>
                        </ul>
                    </section>
                    <section className="product-container">
                        <div className="product-container-row">
                            <div className="product-image">
                                <img src={ProductImage} />
                            </div>
                            <div className="product-information">
                                <div className="product-row">
                                    <div className="product-title">
                                        <div className="product-producer">
                                            Producer title
                                        </div>
                                        <div className="product-title-title">
                                            SMD transil diodes
                                        </div>
                                        <div className="product-code">
                                            #DIGI-TME
                                        </div>
                                    </div>
                                </div>
                                <div className="product-row">
                                    <div className="product-description">
                                        <h5 className="paragraph-title">
                                            Description
                                        </h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                </div>
                                <div className="product-row">
                                    <div className="product-row-block">
                                        <div className="product-add-to-cart">
                                            <button className="button button-icon button-icon-text">
                                                <div className="icon cart"></div>
                                                Add to cart
                                            </button>
                                            <input type="number" className="product-number" min="5" value="5" />
                                            <div className="product-price">
                                                <label>Total price:</label>
                                                $19.95
                                            </div>
                                        </div>
                                        <div className="product-conditions">
                                            <table className="conditions">
                                                <tbody>
                                                    <tr>
                                                        <th>
                                                            Min. amount:
                                                        </th>
                                                        <td>
                                                            5
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                            In stock quantity:
                                                        </th>
                                                        <td>
                                                            1300
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                            Multiplicity:
                                                        </th>
                                                        <td>
                                                            5
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="product-row-block">
                                        <h5 className="product-row-block-title">
                                            Price range
                                        </h5>
                                        <table className="price-range">
                                            <tbody>
                                                <tr>
                                                    <th>
                                                        <div>
                                                            5x
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div>
                                                            $3.99
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        <div>
                                                            25x
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div>
                                                            $3.49
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        <div>
                                                            100x
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div>
                                                            $2.89
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <NavLink to="#" className="link-more">
                                            Show more
                                            <div className="icon menu-arrow-bottom"></div>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="product-container-row">
                            <div className="product-tabs-container">
                                <ul className="product-tabs-nav">
                                    <li className="product-tabs-nav-item">
                                        <a href="#" className="product-tabs-nav-link active" id="specifications">
                                            Specifications
                                        </a>
                                    </li>
                                    <li className="product-tabs-nav-item">
                                        <a href="#" className="product-tabs-nav-link" id="technical-information">
                                            Technical information
                                        </a>
                                    </li>
                                    <li className="product-tabs-nav-item">
                                        <a href="#" className="product-tabs-nav-link" id="additional-information">
                                            Additional information
                                        </a>
                                    </li>

                                </ul>
                                <div className="product-tab-content">
                                    <div className="product-tab-pane active" id="specifications-tab">
                                        <table className="specifications">
                                            <tbody>
                                                <tr>
                                                    <th>
                                                        <div>
                                                            Manufacturer
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div>
                                                            Bosch
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        <div>
                                                            Type of diode
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div>
                                                            Type A
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        <div>
                                                            Case
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div>
                                                            Emergency
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        <div>
                                                            Producer
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div>
                                                            Bitcoin
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        <div>
                                                            Type of diode
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div>
                                                            Audi
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        <div>
                                                            Case
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div>
                                                            Mercedes-Benz
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        <div>
                                                            Manufacturer
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div>
                                                            London
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        <div>
                                                            Type of diode
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div>
                                                            Kiev
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        <div>
                                                            Case
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div>
                                                            Istanbul, Turkey
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="product-tab-pane" id="technical-information-tab">
                                        Technical information
                                    </div>
                                    <div className="product-tab-pane" id="additional-information-tab">
                                        Additional information
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
