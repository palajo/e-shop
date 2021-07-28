import { PRODUCT_INFO_FAIL, PRODUCT_INFO_REQUEST, PRODUCT_INFO_SUCCESS } from "../../constants/product/productInfoConstants";

export const productInfoListReducer = (state = { loading: true, productInfo: [] }, action) => {
  switch (action.type) {
    case PRODUCT_INFO_REQUEST:
      return {
        loading: true,
      }

    case PRODUCT_INFO_SUCCESS:
      return {
        loading: false,
        productInfo: action.payload
      }

    case PRODUCT_INFO_FAIL:
      return {
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}