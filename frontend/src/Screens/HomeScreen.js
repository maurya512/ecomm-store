import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from '../actions/productActions';
// create a function with some props
function HomeScreen(props) {
    // define a hook
    // const [products, setProduct] = useState([]);
    const productList = useSelector(state => state.productList);
    const {products,loading, error} = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProduct());
        return () => {
            // 
        };
    }, [])
    return loading ? <div>Loading....</div>:
    error ? <div>{error}</div>:
    <ul className="products">
        {/* changed from statically showing the products to dynamically showing it */}
        {
            // products will be displayed dynamically based on the data that's retrieved from data.products
            products.map(product =>
                <li key={product._id}>
                    <div className="product">
                    <Link to={'/products/' + product._id}>
                        <img className="product-image" src={product.image} alt="product 1"></img>
                        </Link>
                        <div className="product-name">
            <Link to={'/products/' + product._id}>{product.name}</Link>
                        </div>
                        <div className="product-brand">{product.brand}</div>
                        <div className='product-price'>{product.price}</div>
                        <div className="product-rating">{product.rating} Stars ({product.numReviews})</div>
                    </div>
                </li>)
        }
    </ul>
}

export default HomeScreen;