import Axios from "axios";
import { PRODUCT_PARAMETERS_FAIL, PRODUCT_PARAMETERS_REQUEST, PRODUCT_PARAMETERS_SUCCESS } from '../../constants/product/productParametersConstants';

export const listProductParameters = (productId) => async(dispatch) => {
  dispatch({
    type: PRODUCT_PARAMETERS_REQUEST
  });

  try {
    const { data } = await Axios.get(`/api/product/parameters/${productId}`);
    dispatch({
      type: PRODUCT_PARAMETERS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_PARAMETERS_FAIL,
      payload: error.message
    });
  }
}