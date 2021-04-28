/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import { NavLink } from 'react-router-dom';

import CategoryImage from '../../assets/images/product-image.png';

export default function SliderCategoryBlock() {
    return (
        <div className="slider-category-block">
            <div className="slider-category-image">
                <NavLink to="#">
                    <img src={CategoryImage} />
                </NavLink>
            </div>
            <div className="slider-category-title">
                <div>
                    CONQUER ELECTRONIC
                </div>
                <NavLink to="#">
                    ABE 25A 250V
                </NavLink>
            </div>
            <div className="slider-category-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="slider-category-link">
                <button className="button">
                    Discover
                </button>
            </div>
        </div>
)
}
