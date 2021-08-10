import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProductPrices } from '../../../../redux/actions/product/productPricesActions';
import Loading from '../../../utils/Loading';

function ProductPrices({ prices }) {

  // slice array
  const initialShow = 3;
  const [show, setShow] = useState(initialShow);
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = (pricesLength) => {
    if (showAll === false) {
      setShow(pricesLength);
      setShowAll(true);

    } else {
      setShow(initialShow);
      setShowAll(false);
    }
  }

  return (
    <>
      <table className="price-range">
        <tbody>
          {
            prices.Data.ProductList[0].PriceList.slice(0, show).map((price, index) => (
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
      {
        prices.Data.ProductList[0].PriceList.length > 3 && (
          <button className="link-more" onClick={() => handleShowAll(prices.Data.ProductList[0].PriceList.length)}>
            {
              showAll === false ? (
                <>
                  Show more
                  <div className="icon menu-arrow-bottom"></div>
                </>
              ) : (
                <>
                  Show less
                  <div className="icon menu-arrow-bottom active"></div>
                </>
              )
            }
          </button>
        )
      }
    </>
  );
}

export default ProductPrices;