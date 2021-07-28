import Axios from "axios";
import { PRODUCT_PRICES_FAIL, PRODUCT_PRICES_REQUEST, PRODUCT_PRICES_SUCCESS } from '../../constants/product/productPricesConstants';

export const listProductPrices = (productId) => async(dispatch) => {
  dispatch({
    type: PRODUCT_PRICES_REQUEST
  });

  try {
    const { data } = await Axios.get(`/api/product/prices/${productId}`);
    dispatch({
      type: PRODUCT_PRICES_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_PRICES_FAIL,
      payload: error.message
    });
  }
}