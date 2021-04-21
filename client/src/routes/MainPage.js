import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MainPage() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">
                                Product Api
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
