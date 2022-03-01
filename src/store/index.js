// configure reduces and provide a function that a Redux Provider could use

import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categoryReducer from './categories';
import productReducer from './products';

const reducers = combineReducers({
    category: categoryReducer,
    product: productReducer
});

// pass in reducers to our createStore
const createReduxStore = () => {
    return createStore(reducers, composeWithDevTools());
}

export default createReduxStore;