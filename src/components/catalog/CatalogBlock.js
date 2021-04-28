/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import CatalogImage from '../../assets/images/product-image.png'

const subcategories = [
    {
        id: 1,
        title: "Diodes"
    },
    {
        id: 2,
        title: "Semiconductors"
    },
    {
        id: 3,
        title: "Semiconductors"
    },
    {
        id: 4,
        title: "Semiconductors"
    },
    {
        id: 5,
        title: "Semiconductors"
    },
    {
        id: 6,
        title: "Semiconductors"
    },
    {
        id: 7,
        title: "Semiconductors"
    },
    {
        id: 8,
        title: "Semiconductors"
    },
]


export default function CatalogBlock() {
    const [value, setValue] = useState(5);
    const [showButton, setShowButton] = useState(true);
    
    return (
        <div className="catalog-block">
            <div className="catalog-image">
                <NavLink to="#">
                    <img src={CatalogImage} />
                </NavLink>
            </div>
            <div className="catalog-title">
                <NavLink to="#">
                    Semiconductors
                </NavLink>
            </div>
            <div className="catalog-subcategories">
                <ul className="subcategories">
                    {
                        subcategories.slice(0, value).map((subcategory, index) => (
                            <li className="subcategories-item" key={index}>
                                <NavLink to="#" className="subcategories-link">
                                    {subcategory.title}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
                {
                    showButton ? (
                        <NavLink to="#" className="link-more" onClick={() => {setValue(10); setShowButton(false)}}>
                            Show more
                            <div className="icon menu-arrow-bottom"></div>
                        </NavLink>
                    ) : ''
                }
                
            </div>
        </div>
    )
}