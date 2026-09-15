import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <div className="eyebrow">Real estate database reactivation</div>
          <h1>Reconnect with the people already in your database.</h1>
          <p className="hero-supporting-statement">
            I work through your database, make the calls that haven&apos;t been
            made, follow up old appraisals and reconnect with contacts you&apos;ve
            lost touch with.
          </p>
          <p className="hero-supporting-statement">
            Along the way, I update and clean your data so you know exactly who
            you&apos;ve spoken to and where the opportunities are.
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
        <aside className="hero-card" aria-label="A personal database service">
          <div className="hero-card-kicker">A personal service</div>
          <p className="hero-card-quote">
            I make the calls, update the records and hand genuine opportunities
            back to you.
          </p>
          <div className="hero-card-list">
            <div><span aria-hidden="true">✓</span>One defined database project</div>
            <div><span aria-hidden="true">✓</span>Calls made personally by Donna</div>
            <div><span aria-hidden="true">✓</span>Clear notes and opportunities handed back</div>
          </div>
        </aside>
      </div>
    </section>
  );
}
