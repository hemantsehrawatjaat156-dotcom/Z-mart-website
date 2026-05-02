import React, { useState } from 'react';
import './Products.css';
import productsData from './productsData';

function Products({ addToCart, activeCategory, cart }) {
  const [flash, setFlash] = useState({});

  const filtered =
    activeCategory === 'All'
      ? productsData
      : productsData.filter(p => p.category === activeCategory);

  const getQtyInCart = (id) => {
    const item = cart.find(i => i.id === id);
    return item ? item.qty : 0;
  };

  const handleAdd = (product) => {
    addToCart(product);
    setFlash(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => setFlash(prev => ({ ...prev, [product.id]: false })), 700);
  };

  return (
    <section className="products-section" id="products">
      <div className="products-header">
        <p className="section-eyebrow">Handpicked for you</p>
        <h2 className="section-title">
          {activeCategory === 'All' ? 'ALL PRODUCTS' : activeCategory.toUpperCase()}
        </h2>
      </div>
      <div className="products-grid">
        {filtered.map(product => {
          const qty = getQtyInCart(product.id);
          return (
            <div className="product-card" key={product.id}>
              {product.badge && (
                <span className="product-badge">{product.badge}</span>
              )}
              <div className="product-icon">{product.icon}</div>
              <p className="product-category">{product.category}</p>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-desc">{product.desc}</p>
              <div className="product-footer">
                <span className="product-price">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                <button
                  className={`add-btn ${flash[product.id] ? 'flashing' : ''}`}
                  onClick={() => handleAdd(product)}
                >
                  {qty > 0 ? `+ Add (${qty})` : '+ Add to Cart'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Products;
