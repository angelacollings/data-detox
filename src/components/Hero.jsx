import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h2>Turn your real estate database into appraisal opportunities.</h2>
          <p>
            We call through your CRM, clean and update contact records,
            find appraisal conversations, and support agents with desktop
            appraisals.
          </p>
          <a className="btn" href="#contact">
            Talk to us
          </a>
        </div>
        <div className="hero-card" aria-hidden>
          <div className="hero-card-header">
            <div className="card-avatar">
              <img src="/assets/datadetox-icon-green.png" alt="" />
            </div>
            <div>
              <strong>Data Detox</strong>
              <div className="muted">Real estate database support</div>
            </div>
          </div>
          <div className="hero-card-list">
            <div>
              <span>01</span>
              Clean CRM records
            </div>
            <div>
              <span>02</span>
              Call and update contacts
            </div>
            <div>
              <span>03</span>
              Surface appraisal opportunities
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
