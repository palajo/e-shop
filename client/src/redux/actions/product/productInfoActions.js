import Axios from "axios";
import { PRODUCT_INFO_FAIL, PRODUCT_INFO_REQUEST, PRODUCT_INFO_SUCCESS } from "../../constants/product/productInfoConstants";

export const listProductInfo = (productId) => async(dispatch) => {
  dispatch({
    type: PRODUCT_INFO_REQUEST
  });

  try {
    const { data } = await Axios.get(`/api/product/info/${productId}`);
    dispatch({
      type: PRODUCT_INFO_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_INFO_FAIL,
      payload: error.message
    });
  }
}