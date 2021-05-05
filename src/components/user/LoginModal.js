import React from 'react';

export default function LoginModal() {
    return (
        <div className="modal modal-login" id="login-modal">
            <div className="modal-overlay"></div>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-title">
                            Log In
                        </div>
                        <div className="modal-close">
                            <div className="icon close"></div>
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
                                        Don't have an account? <span data-toggle="modal" data-target="register-modal">Register now!</span>
                                    </div>
                                    <button type="submit" className="button">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
