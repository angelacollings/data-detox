import React from 'react';

export default function WhyDataDetox() {
  return (
    <section className="section why-section" aria-labelledby="why-title">
      <div className="container why-grid">
        <div>
          <div className="eyebrow">Why Data Detox</div>
          <h2 id="why-title" className="section-title">
            Real estate experience. Hands-on database work.
          </h2>
        </div>
        <div className="why-copy">
          <p>
            I&apos;m Donna, and I&apos;ve worked on both sides of real estate — as a
            salesperson and in administration.
          </p>
          <p>
            I&apos;ve seen how easily database follow-up gets pushed aside when
            you&apos;re busy listing, selling and looking after the clients who need
            you today. That&apos;s where I come in.
          </p>
          <p>
            I take on one-off database projects and do the work that&apos;s been
            sitting at the bottom of the list — making the calls, reconnecting
            with contacts, following up old appraisals and updating the database
            as I go.
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
