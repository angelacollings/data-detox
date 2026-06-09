import React from 'react';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="brand">
          <h1>
            <a className="brand-logo" href="/" aria-label="Data Detox">
              <img src="/assets/datadetox-icon-green.png" alt="" />
              <span className="brand-wordmark" aria-hidden="true">
                <span>Data</span>
                <em>Detox</em>
              </span>
            </a>
          </h1>
        </div>
        <nav className="nav" aria-label="Main navigation">
          <a href="/#services">Services</a>
          <a href="/#testimonials">Testimonials</a>
          <a href="/#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
