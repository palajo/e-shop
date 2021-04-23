import Axios from "axios";
import { CATALOG_LIST_FAIL, CATALOG_LIST_REQUEST, CATALOG_LIST_SUCCESS } from "../constants/catalogConstants";

export const listCatalog = () => async(dispatch) => {
    dispatch({
        type: CATALOG_LIST_REQUEST
    });

    try {
        const { data } = await Axios.get('/api/catalog');
        dispatch({
            type: CATALOG_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: CATALOG_LIST_FAIL,
            payload: error.message
        });
    }
}