import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

import CartProductsTable from './CartProductsTable';

export default function CartModal() {
    
    useEffect(() => {
        $(document).ready(function() {
            $("#close-modal").click(function() {
                $(this).closest('.modal').fadeOut(100);
            })
        })
    }, []);

    return (
        <div className="modal modal-cart" id="cart-modal">
            <div className="modal-overlay"></div>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-title">
                            Cart
                        </div>
                        <div className="modal-close">
                            <div className="icon close"></div>
                        </div>
                    </div>
                    <div className="modal-body">
                        <CartProductsTable />
                    </div>
                    <div className="modal-footer">
                        <div className="modal-footer-row">
                            <div className="modal-footer-block">
                                <div className="cart-total-price">
                                    <label>Total price:</label>
                                    $9576.32
                                </div>
                            </div>
                            <div className="modal-footer-block">
                                <NavLink to="/checkout">
                                    <button className="button" id="close-modal">
                                        Checkout
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
