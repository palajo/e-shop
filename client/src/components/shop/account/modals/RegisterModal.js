import React from 'react';
import { CSSTransition } from 'react-transition-group'

export default function RegisterModal({ showRegisterModal, toggleRegisterModal }) {
    return (
        <CSSTransition 
            in={showRegisterModal}
            timeout={400}
            classNames="modal-animation"
            unmountOnExit
        >
            <div className="modal modal-register">
                <div className="modal-overlay" onClick={toggleRegisterModal}></div>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-title">
                                Sign Up
                            </div>
                            <div className="modal-close">
                                <div className="icon close" onClick={toggleRegisterModal}></div>
                            </div>
                        </div>
                        <div className="modal-body">
                            <form action="/user">
                                <div className="form-row">
                                    <div className="form-block">
                                        <label htmlFor="name" className="required">
                                            Full Name
                                        </label>
                                        <input type="text" name="name" id="name" className="form-text" placeholder="Full Name" required />
                                    </div>
                                    <div className="form-block">
                                        <label htmlFor="phone" className="required">
                                            Phone
                                        </label>
                                        <input type="text" name="phone" id="phone" className="form-text" placeholder="+38 (000) 00 00 000" required/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-block">
                                        <label htmlFor="name" className="required">
                                            E-mail address
                                        </label>
                                        <input type="email" name="email" id="email" className="form-text" placeholder="admin@leadbradning.net" required />
                                    </div>
                                    <div className="form-block">
                                        <label htmlFor="company">
                                            Company
                                        </label>
                                        <input type="text" name="company" id="company" className="form-text" placeholder="Your company title" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-block">
                                        <label htmlFor="city" className="required">
                                            City
                                        </label>
                                        <input type="text" name="city" id="city" className="form-text" placeholder="Lviv" required />
                                    </div>
                                    <div className="form-block">
                                        <label htmlFor="department">
                                            Department of Nova Poshta
                                        </label>
                                        <input type="text" name="department" id="department" className="form-text" placeholder="#64" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-block">
                                        <label htmlFor="password" className="required">
                                            Password
                                        </label>
                                        <input type="password" name="password" id="password" className="form-text" placeholder="•••••••••••••••" required />
                                    </div>
                                    <div className="form-block">
                                        <label htmlFor="confirm-password" className="required">
                                            Confirm password
                                        </label>
                                        <input type="password" name="confirm-password" id="confirm-password" className="form-text" placeholder="•••••••••••••••" required />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-block register-submit">
                                        <button type="submit" className="button">Register</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}
