/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import { NavLink } from 'react-router-dom';

import CategoryImage from '../../assets/images/product-image.png';

export default function CategoryBlock() {
    return (
        <div className="category-block">
            <div className="category-image">
                <NavLink to="/catalog">
                    <img src={CategoryImage} />
                </NavLink>
            </div>
            <div className="category-title">
                <NavLink to="/catalog">
                    ABE 25A 250V
                </NavLink>
            </div>
            <div className="category-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </div>
            <div className="category-link">
                <button className="button button-small">
                    Discover
                </button>
            </div>
        </div>
    )
}
