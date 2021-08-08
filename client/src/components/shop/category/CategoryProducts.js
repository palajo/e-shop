import React, { useEffect } from 'react';
import ProductBlock from '../product/ProductBlock';
import { useDispatch, useSelector } from 'react-redux';
import { listCategoryProducts } from '../../../redux/actions/categoryProductsActions';
import Loading from '../../utils/Loading';

function CategoryProducts(props) {
  // fetching category data
  const dispatch = useDispatch();

  const categoryProductsList = useSelector((state) => state.categoryProductsList);
  const {loading, error, products} = categoryProductsList;

  useEffect(() => {
    dispatch(listCategoryProducts(props.categoryId));
  }, [dispatch, props.categoryId]);

  return (
    <>
      {
        loading ? (
          <Loading />
        ) : error ? (
          <div>
            {error}
          </div>
        ) : (
          <>
            {
              products.Data.ProductList.map((product, index) => (
                <ProductBlock
                  key={index}
                  image={product.Photo}
                  producer={product.Producer}
                  title={product.Symbol}
                  description={product.Description}
                  productId={product.Symbol}
                />
              ))
            }
          </>
        )
      }
    </>
  );
}

export default CategoryProducts;