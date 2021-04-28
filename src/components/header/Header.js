import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="left-block">
                            <div className="header-block">
                                <NavLink to="#" className="link-icon white">
                                    <div className="icon phone"></div>
                                    +38 (000) 00 00 000
                                </NavLink>
                            </div>
                            <div className="header-block">
                                <NavLink to="#" className="link-icon white">
                                    <div className="icon email"></div>
                                    admin@leadbranding.net
                                </NavLink>
                            </div>
                        </div>
                        <div className="right-block">
                            <div className="header-block">
                                <div className="header-option">
                                    <label htmlFor="language">Language:</label>
                                    <select name="language" id="language" className="white">
                                        <option value="English">EN</option>
                                        <option value="Ukrainian">UA</option>
                                    </select>
                                </div>
                            </div>
                            <div className="header-block">
                                <div className="header-option">
                                    <label htmlFor="currency">Currency:</label>
                                    <select name="currency" id="currency" className="white">
                                        <option value="USD">USD</option>
                                        <option value="UAH">UAH</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="container">
                    <div className="row">
                        <div className="left-block">
                            <div className="header-block">
                                <button className="button transparent button-icon">
                                    <div className="icon burger"></div>
                                </button>
                            </div>
                            <div className="header-block">
                                <NavLink to="/">
                                    <div className="logo">
                                        logo
                                    </div>
                                </NavLink>
                            </div>
                            <div className="header-block">
                                <button className="button button-icon button-icon-text">
                                    <div className="icon catalog"></div>
                                    Catalog
                                </button>
                            </div>
                        </div>
                        <div className="center-block">
                            <div className="search-bar">
                                <input type="text" placeholder="Search.." className="search-input" />
                                <button className="button button-icon search-submit" type="submit">
                                    <div className="icon search"></div>
                                </button>
                            </div>
                        </div>
                        <div className="right-block">
                            <div className="header-block">
                                <button className="button button-icon">
                                    <div className="icon user"></div>
                                </button>
                            </div>
                            <div className="header-block">
                                <button className="button button-icon">
                                    <div className="icon cart"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
