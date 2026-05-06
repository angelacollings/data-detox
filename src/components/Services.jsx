import React from 'react';

const items = [
  {
    title: 'Database Cleaning',
    desc: 'Clean duplicate, outdated, and incomplete CRM records so agents can trust the data they are working from.',
  },
  {
    title: 'Appraisal Calling',
    desc: 'Call through your database with a professional real estate approach to update details and uncover appraisal opportunities.',
  },
  {
    title: 'Desktop Appraisals',
    desc: 'Prepare desktop appraisal support for agents who need fast, practical property insights before the next conversation.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <h3 className="section-title">Services</h3>
          <p>
            Practical support for agents who have useful contacts buried inside
            messy, outdated, or underworked databases.
          </p>
        </div>
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
