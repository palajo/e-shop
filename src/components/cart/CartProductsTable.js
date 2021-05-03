/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { NavLink } from 'react-router-dom'

import ProductImage from '../../assets/images/product-image.png'

export function CartProductsTableRow() {
    return(
        <tr>
            <td className="product-image">
                <NavLink to="#">
                    <img src={ProductImage} />
                </NavLink>
            </td>
            <td className="product-title">
                <div className="product-title-title">
                    <NavLink to="/catalog/category/product">
                        SMD transil diodes
                    </NavLink>
                </div>
                <div className="product-title-code">
                    #DIGI-TME
                </div>
            </td>
            <td className="product-price">
                $3.99
            </td>
            <td className="product-quantity">
                <div className="product-quantity-input-row">
                    <div className="quantity-button">
                        <div className="icon minus"></div>
                    </div>
                    <input type="number" className="quantity-input" min="1" value="1" />
                    <div className="quantity-button">
                        <div className="icon plus"></div>
                    </div>
                </div>
            </td>
            <td className="product-total-price">
                $99.75
                <span>
                    x25
                </span>
            </td>
            <td className="product-remove-from-cart">
                <div className="product-remove">
                    <div className="icon remove"></div>
                </div>
            </td>
        </tr>
    )
}
export default function CartProductsTable() {
    return (
        <table className="cart-table">
            <tbody>
                <CartProductsTableRow />
                <CartProductsTableRow />
                <CartProductsTableRow />
                <CartProductsTableRow />
                <CartProductsTableRow />
            </tbody>
        </table>
    )
}
