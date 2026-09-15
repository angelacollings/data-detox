import React from 'react';

const steps = [
  {
    title: 'Identify',
    description: 'We talk about what has been sitting untouched. It could be old appraisals, past clients, contacts who haven’t been called or another part of your database that needs attention.',
  },
  {
    title: 'Agree',
    description: 'We agree on a defined project and what you’d like me to work through.',
  },
  {
    title: 'Work through it',
    description: 'I get into the database and start working through the contacts. I make the calls, update information, clean the records and note each outcome as I go.',
  },
  {
    title: 'Hand back the opportunities',
    description: 'When someone needs an appraisal, is thinking about selling or needs a conversation with their salesperson, I hand that opportunity back to you. Once the agreed project is complete, we’re done.',
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
          <div className="eyebrow">How a project works</div>
          <h2 id="how-it-works-title" className="section-title">A clear start, a systematic process and a defined finish.</h2>
          <p>There is no ongoing admin contract. I simply work through the part of your database we agreed on.</p>
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
