import React from 'react';
import { NavLink } from 'react-router-dom';
import ProductImagePlaceholder from '../../../assets/images/products/no-image.svg';

export default function ProductBlock(props) {
  return (
    <div className="product-block">
      <div className="product-image">
        <NavLink to={`/product/${props.productId.replace(/\//g, '_')}`}>
          {
            props.image && props.image.length > 0 ? (
              <img src={props.image} alt={props.alt} />
            ) : (
              <img src={ProductImagePlaceholder} alt={props.alt} />
            )
          }
        </NavLink>
      </div>
      <div className="product-title">
        <div>
          {props.producer}
        </div>
        <NavLink to={`/product/${props.productId.replace(/\//g, '_')}`}>
          {props.title}
        </NavLink>
      </div>
      <div className="product-description">
        {
          props.description && props.description.slice(0, 90)
        }
      </div>
      <div className="product-block-row">
        <div className="product-price">
          <table className="price-range">
            <tbody>
              {
                props.priceList.slice(0, 3).map((price, index) => (
                  <tr key={index}>
                    <th>
                      <div>
                        {price.Amount}
                        x
                      </div>
                    </th>
                    <td>
                      <div>
                        $
                        {price.PriceValue}
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
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
