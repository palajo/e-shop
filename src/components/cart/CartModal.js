import React from 'react'
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'

import CartProductsTable from './CartProductsTable';

export default function CartModal({ showCartModal, toggleCartModal }) {
    return (
        <CSSTransition 
            in={showCartModal}
            timeout={400}
            classNames="modal-animation"
            unmountOnExit
        >
            <div className="modal modal-cart">
                <div className="modal-overlay" onClick={toggleCartModal}></div>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-title">
                                Cart
                            </div>
                            <div className="modal-close">
                                <div className="icon close" onClick={toggleCartModal}></div>
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
        </CSSTransition>
    )
}
