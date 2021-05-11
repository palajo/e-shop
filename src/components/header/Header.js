import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import $ from 'jquery';

import CatalogNavigation from './CatalogNavigation';

export default function Header() {

    useEffect(() => {
        $(document).ready(function() {
            $('[data-toggle="modal"]').click(function() {
                var modalId = $(this).attr('data-target').toString();
                $('#' + modalId + '.modal').fadeIn(0);
            });

            $('.modal-close, .modal-overlay').click(function() {
                $(this).closest('.modal').fadeOut(100);
            });

            $('.open-catalog-navigation').click(function() {
                $('.catalog-navigation').fadeIn(0);
            });

            $('.catalog-navigation-overlay').click(function() {
                $('.catalog-navigation').fadeOut(100);
            });
        });
    }, []);

    const [openNav, setOpenNav] = useState(false);

    const handleOpenNav = () => {
        setOpenNav(true);
    };

    const handleCloseNav = () => {
        setOpenNav(false);
    };

    return (
        <>
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
                                    <select name="language" id="language" className="white small">
                                        <option value="English">EN</option>
                                        <option value="Ukrainian">UA</option>
                                    </select>
                                </div>
                            </div>
                            <div className="header-block">
                                <div className="header-option">
                                    <label htmlFor="currency">Currency:</label>
                                    <select name="currency" id="currency" className="white small">
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
                                <button className="button button-icon button-icon-text" onClick={handleOpenNav}>
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
                                <button className="button button-icon" data-toggle="modal" data-target="login-modal">
                                    <div className="icon user"></div>
                                </button>
                            </div>
                            <div className="header-block">
                                <button className="button button-icon cart-button" data-toggle="modal" data-target="cart-modal">
                                    <div className="icon cart"></div>
                                    <div className="cart-button-counter">
                                        5
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <CatalogNavigation 
            openNav={openNav}
            handleOpenNav={handleOpenNav}
            handleCloseNav={handleCloseNav}
        />
        </>
    )
}
