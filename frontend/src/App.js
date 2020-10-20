import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  }

  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          {/* in order to give the sidebar an open and close functionality we create individual functions for them  */}
          <button onClick={openMenu}>
            &#9776;
        </button>
        <Link to ='/'>Maurya's Store</Link>
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
          {/* route for each individual product */}
          <Route path='/products/:id' component={ProductScreen} />
          {/* route for the home page */}
          <Route path="/" exact={true} component={HomeScreen} />
        </div>
      </main>
      <footer className="footer">
        All rights reserved.
    </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
