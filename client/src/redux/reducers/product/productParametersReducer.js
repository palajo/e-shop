import { PRODUCT_PARAMETERS_FAIL, PRODUCT_PARAMETERS_REQUEST, PRODUCT_PARAMETERS_SUCCESS } from '../../constants/product/productParametersConstants';

export const productParametersListReducer = (state = { parametersLoading: true, productParameters: [] }, action) => {
  switch (action.type) {
    case PRODUCT_PARAMETERS_REQUEST:
      return {
        parametersLoading: true,
      }

    case PRODUCT_PARAMETERS_SUCCESS:
      return {
        parametersLoading: false,
        productParameters: action.payload
      }

    case PRODUCT_PARAMETERS_FAIL:
      return {
        parametersLoading: false,
        parametersError: action.payload
      }

    default:
      return state
  }
}