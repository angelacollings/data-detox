import React from 'react';

const steps = [
  {
    title: 'We discuss your database.',
    description:
      "We'll talk about your current system and what you'd like to achieve.",
  },
  {
    title: 'You provide secure access.',
    description:
      'Access is provided securely, and your information is treated with care and confidentiality.',
  },
  {
    title: 'We clean, organise and standardise your data.',
    description:
      "We'll remove inconsistencies, organise records and make your database easier to use.",
  },
  {
    title: "We return a database that's ready for prospecting.",
    description:
      "You'll receive a database that's organised, easy to search and ready to support your prospecting.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="section how-it-works"
      aria-labelledby="how-it-works-title"
    >
      <div className="container">
        <div className="section-header">
          <h3 id="how-it-works-title" className="section-title">
            How it works
          </h3>
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
