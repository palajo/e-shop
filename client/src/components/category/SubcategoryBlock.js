/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { NavLink } from 'react-router-dom'

import SubcategoryImage from '../../assets/images/product-image.png'

export default function SubcategoryBlock() {
    return (
        <div className="subcategory-block">
            <div className="subcategory-image">
                <NavLink to="#">
                    <img src={SubcategoryImage} />
                </NavLink>
            </div>
            <div className="subcategory-title">
                <NavLink to="#">
                    Semiconductors
                </NavLink>
            </div>
        </div>
    )
}
