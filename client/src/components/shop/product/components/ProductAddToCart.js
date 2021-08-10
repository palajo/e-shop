import React, { useEffect, useState } from 'react';
import ProductPrices from './ProductPrices';
import { useDispatch, useSelector } from 'react-redux';
import { listProductPrices } from '../../../../redux/actions/product/productPricesActions';
import Loading from '../../../utils/Loading';

function ProductAddToCart({ productId, minAmount, multiplicity }) {
  // fetching prices
  const dispatch = useDispatch();

  const productPricesList = useSelector((state) => state.productPricesList);
  const { loading, error, prices } = productPricesList;

  useEffect(() => {
    dispatch(listProductPrices(productId));
  }, [productId])


  // counting price
  const [quantity, setQuantity] = useState(minAmount);
  const [price, setPrice] = useState(10);

  const getPrice = (quantity) => {
    return prices.Data.ProductList[0].PriceList.filter((item) => item.Amount == quantity).map((value) => {
      return value.PriceValue;
    });
  };

  console.log(prices);

  return (
    <>
      {
        loading ? (
          <Loading />
        ) : error ? (
          <>{error}</>
        ) : (
          <div className="product-row">
            <div className="product-row-block">
              <div className="product-add-to-cart">
                <button
                  className="button button-icon button-icon-text"
                  disabled={prices.Data.ProductList[0].Amount === 0}
                >
                  <div className="icon cart"></div>
                  Add to cart
                </button>
                <input
                  type="number"
                  className="product-number"
                  min={minAmount}
                  step={multiplicity}
                  defaultValue={quantity}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                />
                <div className="product-price">
                  <label>Total price:</label>
                  ${getPrice(quantity)}
                </div>
              </div>
              <div className="product-conditions">
                <table className="conditions">
                  <tbody>
                    <tr>
                      <th>
                        In stock:
                      </th>
                      <td>
                        {prices.Data.ProductList[0].Amount}
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Min. amount:
                      </th>
                      <td>
                        {minAmount}
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Multiplicity:
                      </th>
                      <td>
                        {multiplicity}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="product-row-block">
              <h5 className="product-row-block-title">
                Price range
              </h5>
              <ProductPrices prices={prices} />
            </div>
          </div>
        )
      }
    </>
  );
}

export default ProductAddToCart;