import React from 'react';
import { CSSTransition } from 'react-transition-group'

export default function LoginModal({ showLoginModal, toggleLoginModal, toggleRegisterModal }) {
    return (
        <CSSTransition 
            in={showLoginModal}
            timeout={400}
            classNames="modal-animation"
            unmountOnExit
        >
            <div className="modal modal-login">
                <div className="modal-overlay" onClick={toggleLoginModal}></div>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-title">
                                Log In
                            </div>
                            <div className="modal-close">
                                <div className="icon close" onClick={toggleLoginModal}></div>
                            </div>
                        </div>
                        <div className="modal-body">
                            <form action="/user">
                                <div className="form-row">
                                    <div className="form-block">
                                        <label htmlFor="email" className="required">
                                            E-mail address
                                        </label>
                                        <input type="email" name="email" id="email" className="form-text" placeholder="admin@leadbranding.net" required />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-block">
                                        <label htmlFor="password" className="required">
                                            Password
                                        </label>
                                        <input type="password" name="password" id="password" className="form-text" placeholder="•••••••••••••••" required />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-block">
                                        <div className="custom-checkbox">
                                            <input type="checkbox" name="remember-me" id="remember-me" className="form-checkbox" />
                                            <label htmlFor="remember-me">Remember me</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-block login-submit">
                                        <div className="register-now">
                                            Don't have an account? <span onClick={toggleRegisterModal}>Register now!</span>
                                        </div>
                                        <button type="submit" className="button">Login</button>
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
