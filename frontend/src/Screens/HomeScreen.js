import React from 'react';
import data from '../data';
// create a function with some props
function HomeScreen(props) {
    return <ul className="products">
        {/* changed from statically showing the products to dynamically showing it */}
        {
            // products will be displayed dynamically based on the data that's retrieved from data.products
            data.products.map(product =>
                <li>
                    <div className="product">
                        <img className="product-image" src={product.image} alt="product 1"></img>
                        <div className="product-name">
                            <a href="product.html">{product.name}</a>
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