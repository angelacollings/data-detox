import React from 'react';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="brand">
          <h1>Donna's Data Detox</h1>
          <p className="tag">Cleaner data. Better outreach.</p>
        </div>
        <nav className="nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
