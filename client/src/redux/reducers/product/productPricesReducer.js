import { PRODUCT_PRICES_FAIL, PRODUCT_PRICES_REQUEST, PRODUCT_PRICES_SUCCESS } from '../../constants/product/productPricesConstants';

export const productPricesListReducer = (state = { pricesLoading: true, productPrices: [] }, action) => {
  switch (action.type) {
    case PRODUCT_PRICES_REQUEST:
      return {
        pricesLoading: true,
      }

    case PRODUCT_PRICES_SUCCESS:
      return {
        pricesLoading: false,
        productPrices: action.payload
      }

    case PRODUCT_PRICES_FAIL:
      return {
        pricesLoading: false,
        pricesError: action.payload
      }

    default:
      return state
  }
}