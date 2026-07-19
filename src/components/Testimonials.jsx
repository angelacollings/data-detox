import React from 'react';

const data = [
  {
    quote:
      'Data detox is amazing. They clean up your contacts in quick time. Update the details your missing and leave you with useful data. Highly efficient and would recommend to anyone who has limited time!',
    by: 'Fiona, Whangarei',
  },
  {
    quote:
      'Working with Donna has been an absolute lifesaver! She is so efficient, incredibly easy to talk to, and just amazing at what she does. She completely cleared out the fluff from our database, making lead management a breeze and giving us total peace of mind that our data is actually working for us.',
    by: 'Ashlee, Whangarei',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <h3 className="section-title">What our clients say</h3>
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
