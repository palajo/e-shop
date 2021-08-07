import { PRODUCT_INFO_FAIL, PRODUCT_INFO_REQUEST, PRODUCT_INFO_SUCCESS } from "../../constants/product/productInfoConstants";

export const productInfoListReducer = (state = { infoLoading: true, productInfo: [] }, action) => {
  switch (action.type) {
    case PRODUCT_INFO_REQUEST:
      return {
        infoLoading: true,
      }

    case PRODUCT_INFO_SUCCESS:
      return {
        infoLoading: false,
        productInfo: action.payload
      }

    case PRODUCT_INFO_FAIL:
      return {
        infoLoading: false,
        infoError: action.payload
      }

    default:
      return state
  }
}