import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1>From Data to Leads: We bridge the gap for you.</h1>
          <p className="hero-supporting-statement">
            Turn a messy database into your most valuable business asset.
          </p>

          <a className="btn" href="#contact">
            Talk to us
          </a>
        </div>
        <aside className="hero-card" aria-label="What you'll get">
          <div className="hero-card-header">
            <div>
              <strong>What you&apos;ll get</strong>
              <div className="muted">A database that works harder for you.</div>
            </div>
          </div>
          <div className="hero-card-list">
            <div>
              <span aria-hidden="true"> </span>
              Accurate, organised records
            </div>
            <div>
              <span aria-hidden="true"> </span>
              Clearer prospecting priorities
            </div>
            <div>
              <span aria-hidden="true"> </span>
              More time to focus on clients
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
