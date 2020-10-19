import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  }

  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  }
  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          {/* in order to give the sidebar an open and close functionality we create individual functions for them  */}
          <button onClick={openMenu}>
            &#9776;
        </button>
          <a href="index.html">Maurya's Store</a>
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="login.html">Login</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Categories</h3>
        <button className="sidebar-closeButton" onClick={closeMenu}>
          X
        </button>
        <ul>
          <li>
            <a href="index.html">Laptops</a>
          </li>
          <li>
            <a href="index.html">Cell Phones</a>
          </li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <ul className="products">
            <li className="product">
              <img className="product-image" src='./images/p1.jpg' alt="product 1"></img>
              <div className="product-name">
                <a href="product.html">Macbook Pro 2020 Retina Display</a>
              </div>
              <div className="product-brand">Apple</div>
              <div className='product-price'>$999</div>
              <div className="product-rating">4.75 (10 reviews)</div>
            </li>
            <li className="product">
              <img className="product-image" src='./images/p1.jpg' alt="product 1"></img>
              <div className="product-name">
                <a href="product.html">Macbook Pro 2020 Retina Display</a>
              </div>
              <div className="product-brand">Apple</div>
              <div className='product-price'>$999</div>
              <div className="product-rating">4.75 (10 reviews)</div>
            </li>
            <li className="product">
              <img className="product-image" src='./images/p1.jpg' alt="product 1"></img>
              <div className="product-name">
                <a href="product.html">Macbook Pro 2020 Retina Display</a>
              </div>
              <div className="product-brand">Apple</div>
              <div className='product-price'>$999</div>
              <div className="product-rating">4.75 (10 reviews)</div>
            </li>
            <li className="product">
              <img className="product-image" src='./images/p1.jpg' alt="product 1"></img>
              <div className="product-name">
                <a href="product.html">Macbook Pro 2020 Retina Display</a>
              </div>
              <div className="product-brand">Apple</div>
              <div className='product-price'>$999</div>
              <div className="product-rating">4.75 (10 reviews)</div>

            </li>
            <li className="product">
              <img className="product-image" src='./images/p1.jpg' alt="product 1"></img>
              <div className="product-name">
                <a href="product.html">Macbook Pro 2020 Retina Display</a>
              </div>
              <div className="product-brand">Apple</div>
              <div className='product-price'>$999</div>
              <div className="product-rating">4.75 (10 reviews)</div>

            </li>

          </ul>
        </div>
      </main>
      <footer className="footer">
        All rights reserved.
    </footer>
    </div>
  );
}

export default App;
