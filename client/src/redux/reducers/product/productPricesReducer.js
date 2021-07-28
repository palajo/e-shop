import { PRODUCT_PRICES_FAIL, PRODUCT_PRICES_REQUEST, PRODUCT_PRICES_SUCCESS } from '../../constants/product/productPricesConstants';

export const productPricesListReducer = (state = { loading: true, productPrices: [] }, action) => {
  switch (action.type) {
    case PRODUCT_PRICES_REQUEST:
      return {
        loading: true,
      }

    case PRODUCT_PRICES_SUCCESS:
      return {
        loading: false,
        productPrices: action.payload
      }

    case PRODUCT_PRICES_FAIL:
      return {
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}