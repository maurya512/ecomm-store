import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";

function productListReducer(state = {products: []}, action) {
    // use a switch case 
    switch (action.type) {
        // if we are sending a request to the server for a list of products 
        case PRODUCT_LIST_REQUEST:
            // return loading to true
            return {loading: true};
        // if we successfully receive a response from the server for a list of products
        case PRODUCT_LIST_SUCCESS:
            // change loading to false and set products to true
            return {loading:false, products: action.payload};
            // if we don't get any response from the server 
        case PRODUCT_LIST_FAIL:
            // return loading to false and set the data to action
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}

export { productListReducer }