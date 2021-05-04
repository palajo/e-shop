import React from 'react'

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
                        <div className="login-form">
                            <div className="login-form-row">
                                <div className="login-form-block">
                                    <label htmlFor="email" className="required">
                                        E-mail address
                                    </label>
                                    <input type="email" name="email" id="email" className="login-input" placeholder="admin@leadbranding.net" required />
                                </div>
                            </div>
                            <div className="login-form-row">
                                <div className="login-form-block">
                                    <label htmlFor="password" className="required">
                                        Password
                                    </label>
                                    <input type="password" name="password" id="password" className="login-input" placeholder="•••••••••••••••" required />
                                </div>
                            </div>
                            <div className="login-form-row">
                                <div className="login-form-block">
                                    <div className="custom-checkbox">
                                        <input type="checkbox" name="remember-me" id="remember-me" className="login-checkbox" />
                                        <label htmlFor="remember-me">Remember me</label>
                                    </div>
                                </div>
                            </div>
                            <div className="login-form-row">
                                <div className="login-form-block login-submit">
                                    <div className="register-now">
                                        Don't have an account? <span data-toggle="modal" data-target="register-modal">Register now!</span>
                                    </div>
                                    <button type="submit" className="button">Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
