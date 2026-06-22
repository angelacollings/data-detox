import React from 'react';

const items = [
  {
    title: 'Database Cleaning',
    desc: 'By cleaning your database, we uncover hidden potential, delivering qualified appraisal opportunities you can act on immediately',
  },
  {
    title: 'Database Calling',
    desc: 'Call through your database with a professional real estate approach to update details and uncover appraisal opportunities.',
  },
  {
    title: 'Desktop Appraisals',
    desc: 'Prepare desktop appraisal support for agents who need fast, practical property insights before the next conversation.',
  },
  {
    title: 'Updating Property Attributes',
    desc: 'Up to date property attributes makes every comparison faster and more accurate, giving salepeople the confidence to advise clients without wasting time searching for missing information.',
  },
  {
    title: 'Complete Data',
    desc: 'Identify contacts with missing or incomplete data, and fill in the gaps to make sure you have the information you needed',
  },
  {
    title: 'Lead Score Updates',
    desc: 'Keep your lead scores up to date with the latest information, ensuring you prioritize the most promising opportunities.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <h3 className="section-title">Services</h3>
          <p>
            Practical support for salespeople who have useful contacts buried
            inside messy, outdated, or underworked databases.
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
