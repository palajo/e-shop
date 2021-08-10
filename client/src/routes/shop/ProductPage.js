import React from 'react'
import { NavLink } from 'react-router-dom'

import ProductInformation from '../../components/shop/product/components/ProductInformation';
import ProductTabs from '../../components/shop/product/components/ProductTabs';

export default function ProductPage(props) {
  const productId = props.match.params.productId;

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
                <li className="breadcrumbs-item">
                  <NavLink to="/catalog/category" className="breadcrumbs-link" exact>
                    Category
                  </NavLink>
                </li>
                <li className="breadcrumbs-item">
                  <NavLink to="/catalog/category/product" className="breadcrumbs-link" exact>
                    Product
                  </NavLink>
                </li>
              </ul>
            </section>
            <section className="product-container">
              <ProductInformation productId={productId} />
              <div className="divider"></div>
              <ProductTabs productId={productId} />
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
