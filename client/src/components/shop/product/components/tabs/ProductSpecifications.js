import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProductParameters } from '../../../../../redux/actions/product/productParametersActions';
import Loading from '../../../../utils/Loading';

function ProductSpecifications({ productId }) {
  const dispatch = useDispatch();

  const productParametersList = useSelector((state) => state.productParametersList);
  const { loading, error, parameters} = productParametersList;

  useEffect(() => {
    dispatch(listProductParameters(productId));
  }, [productId])

  return (
    <>
      {
        loading ? (
          <Loading />
        ) : error ? (
          <div>{error}</div>
        ) : (
          <table className="specifications">
            <tbody>
            {
              parameters.Data.ProductList[0].ParameterList.map((parameter, index) => (
                <tr key={index}>
                  <th>
                    <div>
                      {parameter.ParameterName}
                    </div>
                  </th>
                  <td>
                    <div>
                      {parameter.ParameterValue}
                    </div>
                  </td>
                </tr>
              ))
            }
            </tbody>
          </table>
        )
      }
    </>
  );
}

export default ProductSpecifications;