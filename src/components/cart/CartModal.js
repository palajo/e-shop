import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import CartProductsTable from './CartProductsTable'

export default function CartModal() {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => { 
        setIsOpen(true) 
    };

    const closeModal = () => { 
        setIsOpen(false) 
    };

    return (
        <>
            <button className="button button-icon cart-button" onClick={openModal}>
                <div className="icon cart"></div>
                <div className="cart-button-counter">
                    5
                </div>
            </button>
            {           
                isOpen ? (
                    <div className="modal modal-cart">
                        <div className="modal-overlay" onClick={closeModal}></div>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <div className="modal-title">
                                        Cart
                                    </div>
                                    <div className="modal-close" onClick={closeModal}>
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
                                                <button className="button">
                                                    Checkout
                                                </button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            }        
        </>
    )
}
