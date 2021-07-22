import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { productListReducer } from './redux/reducers/productReducers';
import { catalogListReducer } from './redux/reducers/catalogReducers';
import { categoryListReducer } from './redux/reducers/categoryReducers';
import { categoryProductsListReducer } from './redux/reducers/categoryProductsReducers';

const initialState = {};

const reducer = combineReducers({
    productList: productListReducer,
    catalogList: catalogListReducer,
    categoryList: categoryListReducer,
    categoryProductsList: categoryProductsListReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;