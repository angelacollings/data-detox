import React from 'react';

export default function ContactForm() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div>
          <h3 className="section-title">Contact Donna</h3>
          <p>
            Tell Donna about your database and goals. She will follow up to
            provide a quote.
          </p>
        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="contact-form"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label>
            Name
            <input name="name" type="text" required />
          </label>
          <label>
            Email
            <input name="email" type="email" required />
          </label>
          <label>
            Phone
            <input name="phone" type="tel" />
          </label>
          <label>
            Message
            <textarea name="message" rows="4" required />
          </label>
          <button className="btn" type="submit">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
