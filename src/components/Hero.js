import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-eyebrow">New Season. New Deals.</p>
        <h1 className="hero-title">
          SHOP<br />
          <span className="hero-title-accent">BOLD.</span><br />
          LIVE LOUD.
        </h1>
        <p className="hero-sub">
          Top gadgets, headphones & daily essentials —<br />
          all in one place.
        </p>
        <div className="hero-cta">
          <a href="#products" className="btn-yellow">Shop Now</a>
          <a href="#categories" className="btn-ghost">Browse Categories</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-big-z">Z</div>
        <div className="hero-ring hero-ring-1"></div>
        <div className="hero-ring hero-ring-2"></div>
      </div>
    </section>
  );
}

export default Hero;
