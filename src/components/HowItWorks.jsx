import React from 'react';

const steps = [
  {
    title: 'Discover',
    description: 'We discuss your business, your database and what better data needs to make possible for you.',
  },
  {
    title: 'Assess',
    description: 'I review the current state of your records and identify the areas that will create the most useful improvement.',
  },
  {
    title: 'Revitalise',
    description: 'I verify client information, organise records, complete agreed appraisal work and improve the overall quality of your database.',
  },
  {
    title: 'Handover',
    description: 'You receive a clearer, more reliable database that is ready for confident, consistent prospecting.',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section how-it-works"
      aria-labelledby="how-it-works-title"
    >
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">A clear, careful process</div>
          <h2 id="how-it-works-title" className="section-title">From uncertain data to confident prospecting.</h2>
          <p>You know where the project is heading, what is being improved and what you will receive.</p>
        </div>
        <ol className="steps-grid">
          {steps.map((step, index) => (
            <li key={step.title} className="step">
              <span className="step-number" aria-hidden="true">
                {index + 1}
              </span>
              <div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
