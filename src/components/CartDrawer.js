import React from 'react';
import './CartDrawer.css';

function CartDrawer({ open, onClose, cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      <div
        className={`drawer-overlay ${open ? 'visible' : ''}`}
        onClick={onClose}
      />
      <div className={`cart-drawer ${open ? 'open' : ''}`}>
        <div className="drawer-header">
          <h3 className="drawer-title">YOUR CART</h3>
          <span className="drawer-count">{totalItems} item{totalItems !== 1 ? 's' : ''}</span>
          <button className="drawer-close" onClick={onClose}>✕</button>
        </div>

        {cart.length === 0 ? (
          <div className="drawer-empty">
            <span>🛒</span>
            <p>Your cart is empty.</p>
            <button className="btn-yellow-sm" onClick={onClose}>Start Shopping</button>
          </div>
        ) : (
          <>
            <div className="drawer-items">
              {cart.map(item => (
                <div className="drawer-item" key={item.id}>
                  <span className="drawer-item-icon">{item.icon}</span>
                  <div className="drawer-item-info">
                    <p className="drawer-item-name">{item.name}</p>
                    <p className="drawer-item-price">
                      ₹{(item.price * item.qty).toLocaleString('en-IN')}
                      <span className="drawer-item-qty"> × {item.qty}</span>
                    </p>
                  </div>
                  <button
                    className="drawer-remove"
                    onClick={() => removeFromCart(item.id)}
                  >✕</button>
                </div>
              ))}
            </div>
            <div className="drawer-footer">
              <div className="drawer-total">
                <span>Total</span>
                <span className="drawer-total-amt">₹{total.toLocaleString('en-IN')}</span>
              </div>
              <button className="btn-checkout">Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CartDrawer;
