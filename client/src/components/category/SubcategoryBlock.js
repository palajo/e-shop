/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { NavLink } from 'react-router-dom'

import SubcategoryImage from '../../assets/images/product-image.png'

export default function SubcategoryBlock(props) {
    return (
        <div className="subcategory-block">
            <div className="subcategory-image">
                <NavLink to={`/catalog/${props.parentCategory}/${props.categoryId}`}>
                    <img src={props.image} alt={props.alt} />
                </NavLink>
            </div>
            <div className="subcategory-title">
                <NavLink to={`/catalog/${props.parentCategory}/${props.categoryId}`}>
                  {props.title}
                </NavLink>
            </div>
        </div>
    )
}
