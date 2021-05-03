/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import { NavLink } from 'react-router-dom';

import ProductImage from '../../assets/images/product-image.png';

export default function ProductBlock() {
    return (
        <div className="product-block">
            <div className="product-image">
                <NavLink to="/catalog/category/product">
                    <img src={ProductImage} />
                </NavLink>
            </div>
            <div className="product-title">
                <div>
                    CONQUER ELECTRONIC
                </div>
                <NavLink to="/catalog/category/product">
                    ABE 25A 250V
                </NavLink>
            </div>
            <div className="product-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </div>
            <div className="product-block-row">
                <div className="product-price">
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
                                        $3.29
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
                </div>
                <div className="product-add-to-cart">
                    <button className="button button-icon button-icon-small">
                        <div className="icon cart"></div>
                    </button>
                </div>
            </div>
        </div>
    )
}
