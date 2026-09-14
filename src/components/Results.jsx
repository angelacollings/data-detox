import React from 'react';

const outcomes = [
  'More people contacted',
  'Appraisal opportunities identified',
  'Cleaner, more accurate data',
  'Clear follow-up for the salesperson',
];

export default function Results() {
  return (
    <section className="section results-section" aria-labelledby="results-title">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">The result</div>
          <h2 id="results-title" className="section-title">
            The calls get made. The opportunities come back to you.
          </h2>
          <p>
            Contacts who haven&apos;t heard from you are reconnected with, old
            appraisals are followed up and your database is updated as I go.
          </p>
        </div>
        <div className="outcomes-grid">
          {outcomes.map((outcome) => (
            <div className="outcome" key={outcome}>
              <span aria-hidden="true">✓</span>
              <strong>{outcome}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
