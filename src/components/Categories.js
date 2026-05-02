import React from 'react';
import './Categories.css';

const cats = [
  { label: 'All', icon: '⚡' },
  { label: 'Phones', icon: '📱' },
  { label: 'Headphones', icon: '🎧' },
  { label: 'Groceries', icon: '🛒' },
];

function Categories({ activeCategory, setActiveCategory }) {
  return (
    <section className="categories-section" id="categories">
      <p className="section-eyebrow">Browse by</p>
      <h2 className="section-title">CATEGORIES</h2>
      <div className="cat-buttons">
        {cats.map(cat => (
          <button
            key={cat.label}
            className={`cat-btn ${activeCategory === cat.label ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.label)}
          >
            <span className="cat-icon">{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default Categories;
