// configure reduces and provide a function that a Redux Provider could use

import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import messageReducer from './messages';

const reducers = combineReducers({
    chat: messageReducer,
});

// pass in reducers to our createStore
const createReduxStore = () => {
    return createStore(reducers, composeWithDevTools());
}

export default createReduxStore;