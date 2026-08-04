import React from 'react';

export default function WhyDataDetox() {
  return (
    <section className="section why-section" aria-labelledby="why-title">
      <div className="container why-grid">
        <div>
          <div className="eyebrow">Why Data Detox</div>
          <h2 id="why-title" className="section-title">
            Real estate experience. Database expertise.
          </h2>
        </div>
        <div className="why-copy">
          <p>
            I&apos;ve worked as a real estate salesperson, a personal assistant
            and a database specialist. I understand how salespeople prospect, how a
            busy real estate business operates and what your database needs to
            do every day.
          </p>
          <p>
            With more than 1,500 hours working hands-on in real estate databases, I know
            how to refresh databases that have become difficult to use—and
            revitalise them as valuable business assets.
          </p>
          <div className="why-signoff">
            <span className="why-monogram" aria-hidden="true">D</span>
            <span><strong>Donna</strong><small>Founder, Data Detox</small></span>
          </div>
          <a className="text-link" href="/about/">Meet Donna <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  );
}
