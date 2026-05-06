import React from 'react';

const data = [
  {
    quote: 'Data Detox cleaned our old list and boosted open rates immediately.',
    by: 'Alex R., Brokerage Owner',
  },
  {
    quote: 'Professional, polite, and effective — highly recommended.',
    by: 'Sam T., Agent',
  },
  {
    quote: 'Great follow-up and accurate information updates.',
    by: 'Renee H., Team Lead',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <h3 className="section-title">What agents say</h3>
        <div className="testimonials">
          {data.map((t, i) => (
            <blockquote key={i} className="testimonial">
              <p>&ldquo;{t.quote}&rdquo;</p>
              <cite>- {t.by}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
