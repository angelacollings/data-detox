import React from 'react';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="brand">
          <a className="brand-logo" href="/" aria-label="Data Detox home">
            <span className="brand-logo-crop" aria-hidden="true">
              <img
                src="/assets/data-detox-logo-header.webp"
                alt=""
                width="480"
                height="320"
              />
            </span>
          </a>
        </div>
        <nav className="nav" aria-label="Main navigation">
          <a href="/#services">Services</a>
          <a href="/#how-it-works">Process</a>
          <a href="/about">About</a>
          <a className="nav-cta" href="/#contact">Book a call</a>
        </nav>
      </div>
    </header>
  );
}
