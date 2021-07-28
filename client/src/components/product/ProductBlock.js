import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ProductBlock(props) {
  return (
    <div className="product-block">
      <div className="product-image">
        <NavLink to={`/product/${props.productId}`}>
          <img src={props.image} alt={props.alt}/>
        </NavLink>
      </div>
      <div className="product-title">
        <div>
          {props.producer}
        </div>
        <NavLink to={`/product/${props.productId}`}>
          {props.title}
        </NavLink>
      </div>
      <div className="product-description">
        {props.description}
      </div>
      <div className="product-block-row">
        <div className="product-price">
          <table className="price-range">
            <tbody>
            <tr>
              <th>
                <div>
                  5x
                </div>
              </th>
              <td>
                <div>
                  $3.99
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <div>
                  25x
                </div>
              </th>
              <td>
                <div>
                  $3.29
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <div>
                  100x
                </div>
              </th>
              <td>
                <div>
                  $2.89
                </div>
              </td>
            </tr>
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
