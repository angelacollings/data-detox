import React from 'react';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="brand">
          <h1>
            <a className="brand-logo" href="/" aria-label="Data Detox">
              <span className="brand-logo-crop" aria-hidden="true">
                <img src="/assets/data-detox-logo-wide.png" alt="" />
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
