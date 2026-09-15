import React from 'react';

const items = [
  {
    title: 'Database Reactivation',
    desc: 'Work through contacts who haven’t been spoken to recently and reconnect with the people who have fallen through the gaps. As I make the calls, I update contact information, correct records and clean the database as I go.',
    href: '/database-revitalisation/',
  },
  {
    title: 'Past Client Reconnection',
    desc: 'Reconnect with past clients and find out what’s changed since you last spoke. I’ll make the calls, update their details and flag anyone who would benefit from a conversation with you.',
    href: '/client-verification/',
  },
  {
    title: 'Appraisal Follow-Up',
    desc: 'Follow up people you’ve previously appraised and find out whether they’d like an updated appraisal. I make the calls, update their information and hand interested contacts back to you to continue the conversation.',
    href: '/appraisal-preparation/',
  },
  {
    title: 'Database Deep Dive',
    desc: 'Not sure where the gaps are? I’ll work through your database to identify contacts who haven’t been called, old appraisals that need following up, incomplete records, duplicates and areas where opportunities may have been missed.',
  },
  {
    title: 'Farm Area Research',
    desc: 'Building a new farm area? I can research your chosen area, identify people you already know and help build the contact information you need to start prospecting.',
    secondary: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">What I can work through</div>
          <h2 className="section-title">The follow-up that has fallen through the gaps.</h2>
          <p>
            Each service is a defined project. I personally make the calls,
            update the records and hand opportunities back to the salesperson.
          </p>
        </div>
        <div className="services-grid">
          {items.map((s) => (
            <article key={s.title} className={`service${s.secondary ? ' service-secondary' : ''}`}>
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
