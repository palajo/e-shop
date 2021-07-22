import Axios from "axios";
import { CATEGORY_PRODUCTS_FAIL, CATEGORY_PRODUCTS_REQUEST, CATEGORY_PRODUCTS_SUCCESS } from "../constants/categoryProductsConstants";

export const listCategoryProducts = (categoryId) => async (dispatch) => {
  dispatch({
    type: CATEGORY_PRODUCTS_REQUEST,
    payload: categoryId
  });

  try {
    const { data } = await Axios.get(`/api/categoryProducts/${categoryId}`);
    dispatch({
      type: CATEGORY_PRODUCTS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_PRODUCTS_FAIL,
      payload: error.message
    });
  }
}