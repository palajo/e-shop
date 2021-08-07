import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ContactsPage() {
    return (
        <div id="wrapper">
            <div className="container">
                <div className="row">
                    <section className="breadcrumbs-container">
                        <ul className="breadcrumbs">
                            <li className="breadcrumbs-item">
                                <NavLink to="/" className="breadcrumbs-link" exact>
                                    Mainpage
                                </NavLink>
                            </li>
                            <li className="breadcrumbs-item">
                                <NavLink to="/contacts" className="breadcrumbs-link" exact>
                                    Contacts
                                </NavLink>
                            </li>
                        </ul>
                    </section>
                    <aside className="sidebar info-sidebar">
                        <div className="sidebar-block">
                            <ul className="sidebar-nav">
                                <li className="sidebar-nav-item">
                                    <NavLink to="/about-us" className="sidebar-nav-link" exact>
                                        <div className="icon processor"></div>
                                        About Us
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-item">
                                    <NavLink to="/delivery-and-payment" className="sidebar-nav-link" exact>
                                        <div className="icon processor"></div>
                                        Delivery and Payment
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-item">
                                    <NavLink to="/contacts" className="sidebar-nav-link" exact>
                                        <div className="icon processor"></div>
                                        Contacts
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-item">
                                    <NavLink to="/privacy-policy" className="sidebar-nav-link" exact>
                                        <div className="icon processor"></div>
                                        Privacy Policy
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </aside>
                    <main className="content">
                        <section className="page-container contacts-container">
                            <div className="page-container-header">
                                <div className="page-container-title">
                                    Contacts
                                </div>
                            </div>
                            <div className="page-container-body">
                                <div className="contacts-row">
                                    <div className="contact-map-block">
                                        <iframe title="our-office" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1286.4575427431407!2d24.025911892590315!3d49.84405302322568!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf9783fecb4fecf1f!2z0JvRjNCy0L7QstGB0LrQuNC5INC90LDRhtC40L7QvdCw0LvRjNC90YvQuSDQsNC60LDQtNC10LzQuNGH0LXRgdC60LjQuSDRgtC10LDRgtGAINC-0L_QtdGA0Ysg0Lgg0LHQsNC70LXRgtCwINC40LzQtdC90Lgg0KHQvtC70L7QvNC40Lgg0JrRgNGD0YjQtdC70YzQvdC40YbQutC-0Lk!5e0!3m2!1sru!2sua!4v1620219883829!5m2!1sru!2sua" allowfullscreen="" loading="lazy"></iframe>
                                    </div>
                                    <div className="contacts-content-block">
                                        <div className="contacts-block">
                                            <h4>
                                                Our contacts:
                                            </h4>
                                            <div className="contacts-list">
                                                <NavLink to="#" className="link-icon">
                                                    <div className="icon phone"></div>
                                                    +38 (000) 00 00 000
                                                </NavLink>
                                                <NavLink to="#" className="link-icon">
                                                    <div className="icon email"></div>
                                                    admin@leadbranding.net
                                                </NavLink>
                                                <NavLink to="#" className="link-icon">
                                                    <div className="icon location"></div>
                                                    Ukraine, Lviv, Horodotska st. 133/2
                                                </NavLink>
                                            </div>
                                        </div>
                                        <div className="divider"></div>
                                        <div className="contacts-block">
                                            <h4>
                                                Contact us:
                                            </h4>
                                            <form>
                                                <div className="form-row">
                                                    <div className="form-block">
                                                        <label htmlFor="name" className="required">Full Name</label>
                                                        <input type="text" className="form-text" placeholder="Full Name" id="name" name="name" required />
                                                    </div>
                                                    <div className="form-block">
                                                        <label htmlFor="phone" className="required">Phone</label>
                                                        <input type="text" className="form-text" placeholder="+38 (000) 00 00 000" id="phone" name="phone" required />
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-block">
                                                        <label htmlFor="message">Message</label>
                                                        <textarea name="message" id="message" className="form-textarea" placeholder="Your message" />
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-block">
                                                        <div className="custom-checkbox">
                                                            <input type="checkbox" name="privacy-policy" id="privacy-policy" className="form-checkbox" required />
                                                            <label htmlFor="privacy-policy" className="required">I agree with <NavLink to="/privacy-policy">privacy policy</NavLink></label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-block">
                                                        <button className="button" type="submit">
                                                            Submit
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}
