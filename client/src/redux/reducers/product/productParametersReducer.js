import { PRODUCT_PARAMETERS_FAIL, PRODUCT_PARAMETERS_REQUEST, PRODUCT_PARAMETERS_SUCCESS } from '../../constants/product/productParametersConstants';

export const productParametersListReducer = (state = { loading: true, productParameters: [] }, action) => {
  switch (action.type) {
    case PRODUCT_PARAMETERS_REQUEST:
      return {
        loading: true,
      }

    case PRODUCT_PARAMETERS_SUCCESS:
      return {
        loading: false,
        productParameters: action.payload
      }

    case PRODUCT_PARAMETERS_FAIL:
      return {
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}