import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-top">

        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-z">Z</span>
            <span className="footer-logo-text">MART</span>
          </div>
          <p className="footer-tagline">Shop Bold. Live Loud.</p>
          <p className="footer-about">
            ZMART brings you the best in tech, audio & daily essentials —
            delivered fast, priced right.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Categories</h4>
          <ul>
            <li><a href="#products">📱 Phones</a></li>
            <li><a href="#products">🎧 Headphones</a></li>
            <li><a href="#products">🛒 Groceries</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul className="contact-list">
            <li>
              <span className="contact-icon">📧</span>
              <span>support@zmart.in</span>
            </li>
            <li>
              <span className="contact-icon">📞</span>
              <span>+91 1800-1800-99<br/>
              <small>(Mon–Sat, 9AM–7PM)</small></span>
            </li>
            <li>
              <span className="contact-icon">🏢</span>
              <span>ZMART HQ, Cyber City<br/>Gurugram, Haryana</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ZMART. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#footer">Privacy Policy</a>
          <a href="#footer">Terms of Service</a>
          <a href="#footer">Returns</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
