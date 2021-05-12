import React from 'react'
import { NavLink } from 'react-router-dom'
import CatalogBlock from '../components/catalog/CatalogBlock'

export default function CatalogPage() {
    return (
        <div id="wrapper">
            <div className="container">
                <div className="row">
                    <main className="full-width">
                        <section className="breadcrumbs-container">
                            <ul className="breadcrumbs">
                                <li className="breadcrumbs-item">
                                    <NavLink to="/" className="breadcrumbs-link" exact>
                                        Mainpage
                                    </NavLink>
                                </li>
                                <li className="breadcrumbs-item">
                                    <NavLink to="/catalog" className="breadcrumbs-link" exact>
                                        Catalog
                                    </NavLink>
                                </li>
                            </ul>
                        </section>
                        <section className="page-container">
                            <div className="page-container-header">
                                <div className="page-container-title">
                                    Diodes
                                </div>
                            </div>
                            <div className="page-container-body">
                                <CatalogBlock />
                                <CatalogBlock />
                                <CatalogBlock />
                                <CatalogBlock />
                                <CatalogBlock />
                                <CatalogBlock />
                                <CatalogBlock />
                                <CatalogBlock />
                                <CatalogBlock />
                                <CatalogBlock />
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}
