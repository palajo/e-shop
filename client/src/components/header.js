import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className="mb-5">
            <div className="container-fluid">
                <div className="row">
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark w-100">
                        <ul className="navbar-nav flex-row">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" exact>
                                    Mainpage
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/catalog" exact>
                                    Catalog
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/category" exact>
                                    Category
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/product" exact>
                                    Product
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/search" exact>
                                    Search
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        
    )
}
