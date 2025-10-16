import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h2>Phone calls. Data cleanup. Appraisals.</h2>
          <p>
            I call your contacts, verify and update records, remove duplicates,
            and offer quick appraisals — so your CRM works for you.
          </p>
          <a className="btn" href="#contact">
            Get a free quote
          </a>
        </div>
        <div className="hero-card" aria-hidden>
          <div className="card-avatar">D</div>
          <div>
            <strong>Donna Sample</strong>
            <div className="muted">
              Database cleanup & appraisal services for real estate agents
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
