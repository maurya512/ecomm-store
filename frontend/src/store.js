import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { productListReducer } from './reducers/productReducer';
import thunk from 'redux-thunk';

const initialState = {};
const reducer = combineReducers({
    productList: productListReducer,
})
// reducer gets a state and an action and returns a state based on that action
// thunk allows us to run async operation inside redux

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;