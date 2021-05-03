import React from 'react'

export default function CheckoutForm() {
    return (
        <div className="checkout-form">
            <div className="checkout-form-row">
                <div className="checkout-form-row-title">
                    Contact information
                </div>
                <div className="checkout-form-block">
                    <label htmlFor="full-name">Full name:</label>
                    <input type="text" className="checkout-form-input" placeholder="Full name.." id="full-name" />
                </div>
                <div className="checkout-form-block">
                    <label htmlFor="email">E-mail:</label>
                    <input type="text" className="checkout-form-input" placeholder="E-mail.." id="email" />
                </div>
                <div className="checkout-form-block">
                    <label htmlFor="phone">Phone number:</label>
                    <input type="text" className="checkout-form-input" placeholder="+38 (000) 00 00 000" id="phone" />
                </div>
            </div>
            <div className="checkout-form-row">
                <div className="checkout-form-row-title">
                    Delivery information
                </div>
                <div className="checkout-form-block">
                    <label htmlFor="full-name">Full name:</label>
                    <input type="text" className="checkout-form-input" placeholder="Full name.." id="full-name" />
                </div>
                <div className="checkout-form-block">
                    <label htmlFor="email">E-mail:</label>
                    <input type="text" className="checkout-form-input" placeholder="E-mail.." id="email" />
                </div>
                <div className="checkout-form-block">
                    <label htmlFor="phone">Phone number:</label>
                    <input type="text" className="checkout-form-input" placeholder="+38 (000) 00 00 000" id="phone" />
                </div>
                <div className="checkout-form-block">
                    <label htmlFor="phone">City:</label>
                    <input type="text" className="checkout-form-input" placeholder="Lviv.." id="phone" />
                </div>
                <div className="checkout-form-block">
                    <label htmlFor="phone">Department of NovaPoshta:</label>
                    <input type="text" className="checkout-form-input" placeholder="#64.." id="phone" />
                </div>
            </div>
        </div>
    )
}
