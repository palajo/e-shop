import React from 'react'

export default function CheckoutForm() {
    return (
        <>
            <div className="form-row">
                <h4 className="form-row-title">
                    Contact information
                </h4>
                <div className="form-block">
                    <label htmlFor="full-name" className="required">Full name</label>
                    <input type="text" className="form-text" placeholder="Full name.." id="full-name" required />
                </div>
                <div className="form-block">
                    <label htmlFor="email" className="required">E-mail</label>
                    <input type="text" className="form-text" placeholder="E-mail.." id="email" required />
                </div>
                <div className="form-block">
                    <label htmlFor="phone" className="required">Phone number</label>
                    <input type="text" className="form-text" placeholder="+38 (000) 00 00 000" id="phone" required />
                </div>
            </div>
            <div className="form-row">
                <h4 className="form-row-title">
                    Delivery information
                </h4>
                <div className="form-block">
                    <label htmlFor="full-name" className="required">Full name</label>
                    <input type="text" className="form-text" placeholder="Full name.." id="full-name" required />
                </div>
                <div className="form-block">
                    <label htmlFor="email" className="required">E-mail</label>
                    <input type="text" className="form-text" placeholder="E-mail.." id="email" required />
                </div>
                <div className="form-block">
                    <label htmlFor="phone" className="required">Phone number</label>
                    <input type="text" className="form-text" placeholder="+38 (000) 00 00 000" id="phone" required />
                </div>
                <div className="form-block">
                    <label htmlFor="city" className="required">City</label>
                    <input type="text" className="form-text" placeholder="Lviv.." id="city" required />
                </div>
                <div className="form-block">
                    <label htmlFor="department" className="required">Department of NovaPoshta</label>
                    <input type="text" className="form-text" placeholder="#64.." id="department" required />
                </div>
            </div>
        </>
    )
}
