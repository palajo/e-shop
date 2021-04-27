/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import { NavLink } from 'react-router-dom';

import ProductImage from '../../assets/images/product-image.png';

export default function ProductBlock() {
    return (
        <div className="product-block">
            <div className="product-image">
                <NavLink to="#">
                    <img src={ProductImage} />
                </NavLink>
            </div>
            <div className="product-title">
                <span>CONQUER ELECTRONIC</span><br />
                <NavLink to="#">
                    ABE 25A 250V
                </NavLink>
            </div>
            <div className="product-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </div>
            <div className="product-block-row">
                <div className="product-price">
                    <div className="price-row">
                        <div className="price-quantity">
                            1x
                        </div>
                        <div className="price-value">
                            3.99$
                        </div>
                    </div>
                    <div className="price-row">
                        <div className="price-quantity">
                            10x
                        </div>
                        <div className="price-value">
                            3.49$
                        </div>
                    </div>
                    <div className="price-row">
                        <div className="price-quantity">
                            100x
                        </div>
                        <div className="price-value">
                            2.89$
                        </div>
                    </div>       
                </div>
                <div className="product-add-to-cart">
                    <button className="button button-icon button-icon-small">
                        <div className="icon cart"></div>
                    </button>
                </div>
            </div>
        </div>
    )
}
