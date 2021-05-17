/* eslint-disable default-case */
import { CATALOG_LIST_FAIL, CATALOG_LIST_REQUEST, CATALOG_LIST_SUCCESS } from "../constants/catalogConstants";

export const catalogListReducer = (state = { loading: true, catalog: [] }, action) => {
    switch (action.type) {
        case CATALOG_LIST_REQUEST:
            return {
                loading: true, 
            }

        case CATALOG_LIST_SUCCESS:
            return {
                loading: false,
                catalog: action.payload
            }
        
        case CATALOG_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}