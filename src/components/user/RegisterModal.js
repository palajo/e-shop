import React from 'react'

export default function RegisterModal() {
    return (
        <div className="modal modal-register" id="register-modal">
            <div className="modal-overlay"></div>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-title">
                            Sign Up
                        </div>
                        <div className="modal-close">
                            <div className="icon close"></div>
                        </div>
                    </div>
                    <div className="modal-body">
                        <div className="register-form">
                            <div className="register-form-row">
                                <div className="register-form-block">
                                    <label htmlFor="name" className="required">
                                        Full Name
                                    </label>
                                    <input type="text" name="name" id="name" className="register-input" placeholder="Full Name" required />
                                </div>
                                <div className="register-form-block">
                                    <label htmlFor="phone" className="required">
                                        Phone
                                    </label>
                                    <input type="text" name="phone" id="phone" className="register-input" placeholder="+38 (000) 00 00 000" required/>
                                </div>
                            </div>
                            <div className="register-form-row">
                                <div className="register-form-block">
                                    <label htmlFor="name" className="required">
                                        E-mail address
                                    </label>
                                    <input type="email" name="email" id="email" className="register-input" placeholder="admin@leadbradning.net" required />
                                </div>
                                <div className="register-form-block">
                                    <label htmlFor="company">
                                        Company
                                    </label>
                                    <input type="text" name="company" id="company" className="register-input" placeholder="Your company title" />
                                </div>
                            </div>
                            <div className="register-form-row">
                                <div className="register-form-block">
                                    <label htmlFor="city" className="required">
                                        City
                                    </label>
                                    <input type="text" name="city" id="city" className="register-input" placeholder="Lviv" required />
                                </div>
                                <div className="register-form-block">
                                    <label htmlFor="department">
                                        Department of Nova Poshta
                                    </label>
                                    <input type="text" name="department" id="department" className="register-input" placeholder="#64" />
                                </div>
                            </div>
                            <div className="register-form-row">
                                <div className="register-form-block">
                                    <label htmlFor="password" className="required">
                                        Password
                                    </label>
                                    <input type="password" name="password" id="password" className="register-input" placeholder="•••••••••••••••" required />
                                </div>
                                <div className="register-form-block">
                                    <label htmlFor="confirm-password" className="required">
                                        Confirm password
                                    </label>
                                    <input type="password" name="confirm-password" id="confirm-password" className="register-input" placeholder="•••••••••••••••" required />
                                </div>
                            </div>
                            <div className="register-form-row">
                                <div className="register-form-block register-submit">
                                    <button type="submit" className="button">Register</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
