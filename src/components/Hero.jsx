import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h2>From Data to Leads: We bridge the gap for you. </h2>
          <p>
            You&apos;ve done the hard work building your database. We&apos;ll
            help you bring it back to life, so you can focus on what you do
            best: building relationships and making deals.
          </p>
          <a className="btn" href="#contact">
            Talk to us
          </a>
        </div>
        {/* <div className="hero-card" aria-hidden>
          <div className="hero-card-header">
            <div>
              <strong>Do you need help with?</strong>
              <div className="muted"></div>
            </div>
          </div>
          <div className="hero-card-list">
            <div>
              <span>*</span>
              Prioritising high value contacts?
            </div>
            <div>
              <span>*</span>
              Re-engaging dormant contacts?
            </div>
            <div>
              <span>*</span>A plan to go forward?
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
