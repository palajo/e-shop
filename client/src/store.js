import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { productListReducer } from './redux/reducers/productReducers';
import { catalogListReducer } from './redux/reducers/catalogReducers';
import { categoryListReducer } from './redux/reducers/categoryReducers';
import { categoryProductsListReducer } from './redux/reducers/categoryProductsReducers';
import {productInfoListReducer} from "./redux/reducers/product/productInfoReducer";
import {productPricesListReducer} from "./redux/reducers/product/productPricesReducer";
import {productParametersListReducer} from "./redux/reducers/product/productParametersReducer";

const initialState = {};

const reducer = combineReducers({
    productList: productListReducer,
    catalogList: catalogListReducer,
    categoryList: categoryListReducer,
    categoryProductsList: categoryProductsListReducer,

    productInfoList: productInfoListReducer,
    productPricesList: productPricesListReducer,
    productParametersList: productParametersListReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;