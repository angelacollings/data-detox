import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <div className="eyebrow">Database support for real estate</div>
          <h1>Make your database work for you.</h1>
          <p className="hero-supporting-statement">
            Data Detox organises and updates your database, so you
            can prospect with confidence, follow up consistently and act on the
            right opportunities.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#contact">
              Book a 15-minute discovery call
            </a>
            <a className="text-link" href="#how-it-works">
              See how it works <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <aside className="hero-card" aria-label="The result of a healthier database">
          <div className="hero-card-kicker">The result</div>
          <p className="hero-card-quote">
            A database you can trust, not another job waiting at the bottom of
            your list.
          </p>
          <div className="hero-card-list">
            <div><span aria-hidden="true">✓</span>Confident prospecting</div>
            <div><span aria-hidden="true">✓</span>Clear follow-up opportunities</div>
            <div><span aria-hidden="true">✓</span>More productive time for salespeople</div>
          </div>
        </aside>
      </div>
    </section>
  );
}
