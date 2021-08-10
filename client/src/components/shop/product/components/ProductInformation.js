import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProductInfo } from '../../../../redux/actions/product/productInfoActions';
import Loading from '../../../utils/Loading';
import ProductAddToCart from './ProductAddToCart';
import ProductImage from './ProductImage';

function ProductInformation({ productId }) {
  const dispatch = useDispatch();

  const productInfoList = useSelector((state) => state.productInfoList);
  const { loading, error, info } = productInfoList;

  useEffect(() => {
    dispatch(listProductInfo(productId));
  }, [productId]);

  return (
    <>
      {
        loading ? (
          <Loading />
        ) : error ? (
          <>{error}</>
        ) : (
          <div className="product-container-row">
            <ProductImage photo={info.Data.ProductList[0].Photo} />
            <div className="product-information">
              <div className="product-row">
                <div className="product-title">
                  <div className="product-producer">
                    {info.Data.ProductList[0].Producer}
                  </div>
                  <div className="product-title-title">
                    {info.Data.ProductList[0].Symbol}
                  </div>
                  {
                    info.Data.ProductList[0].OriginalSymbol && (
                      <div className="product-code">
                        #
                        {info.Data.ProductList[0].OriginalSymbol}
                      </div>
                    )
                  }
                </div>
              </div>
              <div className="product-row">
                <div className="product-description">
                  <h5 className="paragraph-title">
                    Description
                  </h5>
                  <p>
                    {info.Data.ProductList[0].Description}
                  </p>
                </div>
              </div>
              <ProductAddToCart
                productId={productId}
                minAmount={info.Data.ProductList[0].MinAmount}
                multiplicity={info.Data.ProductList[0].Multiples}
              />
            </div>
          </div>
        )
      }
    </>
  );
}

export default ProductInformation;