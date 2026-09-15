import React from 'react';

export default function DatabaseCleaning() {
  return (
    <section className="section cleaning-section" aria-labelledby="cleaning-title">
      <div className="container why-grid">
        <div>
          <div className="eyebrow">Better information as I go</div>
          <h2 id="cleaning-title" className="section-title">
            And while I&apos;m calling, the database gets cleaner too.
          </h2>
        </div>
        <div className="why-copy">
          <p>A database is only useful when you can trust what&apos;s in it.</p>
          <p>
            As I work through your contacts, I check and update the information
            I find, including current phone numbers, email addresses, property
            details, duplicate records and anything else that no longer looks
            right.
          </p>
          <p>
            So you&apos;re not just reconnecting with people. You&apos;re leaving the
            project with better information than you started with.
          </p>
        </div>
      </div>
    </section>
  );
}
