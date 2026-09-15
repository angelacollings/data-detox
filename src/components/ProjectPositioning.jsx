import React from 'react';

export default function ProjectPositioning() {
  return (
    <section className="section project-section" aria-labelledby="project-title">
      <div className="container why-grid">
        <div>
          <div className="eyebrow">A defined piece of work</div>
          <h2 id="project-title" className="section-title">
            One database project at a time.
          </h2>
        </div>
        <div className="why-copy">
          <p><strong>Data Detox isn&apos;t an ongoing admin service.</strong></p>
          <p>
            We identify the part of your database that needs attention and I
            work through it — making the calls, updating the records and finding
            the people who need to hear from you.
          </p>
          <p>Once we&apos;ve worked through the agreed project, it&apos;s done.</p>
        </div>
      </div>
    </section>
  );
}
