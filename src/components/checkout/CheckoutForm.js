import React from 'react'

export default function CheckoutForm() {
    return (
        <form className="checkout-form">
            <div className="form-row">
                <h4 className="form-row-title">
                    Contact information
                </h4>
                <div className="form-block">
                    <label htmlFor="full-name">Full name:</label>
                    <input type="text" className="form-text" placeholder="Full name.." id="full-name" />
                </div>
                <div className="form-block">
                    <label htmlFor="email">E-mail:</label>
                    <input type="text" className="form-text" placeholder="E-mail.." id="email" />
                </div>
                <div className="form-block">
                    <label htmlFor="phone">Phone number:</label>
                    <input type="text" className="form-text" placeholder="+38 (000) 00 00 000" id="phone" />
                </div>
            </div>
            <div className="form-row">
                <h4 className="form-row-title">
                    Delivery information
                </h4>
                <div className="form-block">
                    <label htmlFor="full-name">Full name:</label>
                    <input type="text" className="form-text" placeholder="Full name.." id="full-name" />
                </div>
                <div className="form-block">
                    <label htmlFor="email">E-mail:</label>
                    <input type="text" className="form-text" placeholder="E-mail.." id="email" />
                </div>
                <div className="form-block">
                    <label htmlFor="phone">Phone number:</label>
                    <input type="text" className="form-text" placeholder="+38 (000) 00 00 000" id="phone" />
                </div>
                <div className="form-block">
                    <label htmlFor="phone">City:</label>
                    <input type="text" className="form-text" placeholder="Lviv.." id="phone" />
                </div>
                <div className="form-block">
                    <label htmlFor="phone">Department of NovaPoshta:</label>
                    <input type="text" className="form-text" placeholder="#64.." id="phone" />
                </div>
            </div>
        </form>
    )
}
