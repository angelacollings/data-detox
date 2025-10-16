import React from 'react';

const items = [
  {
    title: 'Data Cleanup',
    desc: 'Verify contact info by calling and updating names, phones, and emails. Remove duplicates and flag bad records.',
  },
  {
    title: 'Contact Verification',
    desc: 'Live phone checks and soft-tries to connect so you only keep engaged contacts.',
  },
  {
    title: 'Appraisal Leads',
    desc: 'Offer quick, friendly appraisal invitations — generate appraisal opportunities while cleaning your list.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h3 className="section-title">Services</h3>
        <div className="services-grid">
          {items.map((s) => (
            <article key={s.title} className="service">
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
