import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

function ProductScreen(props) {
    // we have access to the id of the products by doing as follows
    console.log(props.match.params.id);
    const product = data.products.find(x => x._id === props.match.params.id);
    return <div>
        <div className="back-to-result">
            {/* a link to go back to main page */}
            <Link to='/'>Back to results</Link>
        </div>
        <div className='details'>
            {/* displays the name of the details at the top of the page */}
            <div className='details-image'>
                <img src={product.image} alt="product"></img>
            </div>
            <div className='details-info'>
                <ul>
                    <li>
                        <h4>{product.name} </h4>
                    </li>
                    <li>
                        <h5>{product.rating} Stars ({product.numReviews})</h5>
                    </li>
                    <li>
                        <b>${product.price}</b>
                    </li>
                    <li>
                        Description:
                        <div>
                            {product.description}
                        </div>
                    </li>
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>    
                        Price:{product.price}
                    </li>
                    <li>
                        Status: {product.status}
                    </li>
                    <li>
                        Qty: <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </li>
                    <li>
                        <button className="button"> Add to Cart </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}

export default ProductScreen;