import React from 'react';

const items = [
  {
    title: 'Database Revitalisation',
    desc: 'Refresh and strengthen your database by correcting inaccurate information, resolving duplication and organising records so you can find what you need quickly.',
    href: '/database-revitalisation/',
  },
  {
    title: 'Client Verification',
    desc: 'Reconnect with past clients, verify contact details and identify conversations or opportunities that need your follow-up.',
    href: '/client-verification/',
  },
  {
    title: 'Appraisal Support',
    desc: 'Complete appraisal update calls and prepare desktop appraisals, giving you more time to focus on listing, selling and client relationships.',
    href: '/appraisal-support/',
  },
  {
    title: 'Ongoing Database Health',
    desc: 'Keep your database organised, searchable and ready to support consistent prospecting—long after the initial revitalisation project is complete.',
  },
  {
    title: 'Overall Database Check-in',
    desc: 'We review your database to find the gaps, highlight incomplete information and identify where updates could make it more useful.',
  },
  {
    title: 'Need a New Farm Area?',
    desc: 'We can assess your chosen area and help identify relevant contacts you may not already have in your database, giving you a stronger place to start prospecting.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">Where we help</div>
          <h2 className="section-title">Make your database useful again.</h2>
          <p>
            This is more than a data tidy-up. It is practical database support that
            helps you work with better information and clearer priorities.
          </p>
        </div>
        <div className="services-grid">
          {items.map((s) => (
            <article key={s.title} className="service">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              {s.href && (
                <a className="service-link" href={s.href}>
                  Explore {s.title} <span aria-hidden="true">→</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
