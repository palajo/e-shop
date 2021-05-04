/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import $ from 'jquery';

import ProductImage from '../assets/images/product-image.png'

export default function ProductPage() {

    const prices = [
        {
            id: 1,
            quantity: 5,
            price: 3.99
        },
        {
            id: 2,
            quantity: 25,
            price: 3.79
        },
        {
            id: 3,
            quantity: 50,
            price: 3.49
        },
        {
            id: 4,
            quantity: 75,
            price: 3.19
        },
        {
            id: 5,
            quantity: 100,
            price: 2.89
        }
    ]

    useEffect(() => {
        $(document).ready(function() {
            $('.product-tabs-nav-item').click(function() {
                $('.product-tabs-nav-item').removeClass('active');
                $('.product-tab-pane').removeClass('active');

                $(this).addClass('active');

                var tabId = $(this).attr('id');
                $('#' + tabId + '-tab').addClass('active');
            })
        })
    }, []);

    const [value, setValue] = useState(3);
    const [showButton, setShowButton] = useState(true);

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
                                                    {
                                                        prices.slice(0, value).map((price) => (
                                                            <tr key={price.id}>
                                                                <th>
                                                                    <div>
                                                                        {price.quantity}x
                                                                    </div>
                                                                </th>
                                                                <td>
                                                                    <div>
                                                                        ${price.price}
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                            {
                                                showButton ? (
                                                    <button className="link-more" onClick={() => {setValue(10); setShowButton(false)}}>
                                                        Show more
                                                        <div className="icon menu-arrow-bottom"></div>
                                                    </button>
                                                ) : ''
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="product-container-row">
                                <div className="product-tabs-container">
                                    <ul className="product-tabs-nav">
                                        <li className="product-tabs-nav-item active" id="specifications">
                                            Specifications
                                        </li>
                                        <li className="product-tabs-nav-item" id="technical-information">
                                            Technical information
                                        </li>
                                        <li className="product-tabs-nav-item" id="additional-information">
                                            Additional information
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
                    </main>
                </div>
            </div>
        </div>
    )
}
