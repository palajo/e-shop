/* eslint-disable default-case */
import { CATEGORY_PRODUCTS_FAIL, CATEGORY_PRODUCTS_REQUEST, CATEGORY_PRODUCTS_SUCCESS } from "../constants/categoryProductsConstants";

export const categoryProductsListReducer = (state = { loading: true, products: [] }, action) => {
  switch (action.type) {
    case CATEGORY_PRODUCTS_REQUEST:
      return {
        loading: true,
      }

    case CATEGORY_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload
      }

    case CATEGORY_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}