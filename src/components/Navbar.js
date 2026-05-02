import React from 'react';
import './Navbar.css';

function Navbar({ totalItems, onCartClick }) {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span className="logo-z">Z</span>
        <span className="logo-text">MART</span>
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#categories">Categories</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>

      <button className="cart-button" onClick={onCartClick}>
        <span className="cart-icon">🛒</span>
        <span className="cart-label">Cart</span>
        {totalItems > 0 && (
          <span className="cart-badge">{totalItems}</span>
        )}
      </button>
    </nav>
  );
}

export default Navbar;
