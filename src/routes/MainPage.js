import React from 'react';
import { NavLink } from 'react-router-dom';
import ProductBlock from '../components/product/ProductBlock';


export default function MainPage() {
    return (
        <section className="products-container">
            <div className="products-container-header">
                <div className="products-container-title">
                    <div className="icon processor"></div>
                    Popular products
                </div>
                <div className="product-container-learn-more">
                    <NavLink to="#" className="link-more">
                        Show more
                        <div className="icon menu-arrow-right"></div>
                    </NavLink>
                </div>
            </div>
            <div className="products-container-body no-padding">
                <ProductBlock />
                <ProductBlock />
                <ProductBlock />
                <ProductBlock />
                <ProductBlock />
            </div>
        </section>
    )
};
