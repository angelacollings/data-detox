import React from 'react';

export default function ContactForm() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div className="contact-copy">
          <h3 className="section-title">Contact Data Detox</h3>
          <p>
            Tell us what is sitting in your database and what you would like
            cleaned, called, or appraised. We will follow up with the next step.
          </p>
          <ul className="contact-points">
            <li>Old databases that need cleaning before prospecting</li>
            <li>Contacts that need a professional appraisal call</li>
            <li>Desktop appraisal support for active agent workflows</li>
          </ul>
        </div>

        <form action="/contact" method="POST" className="contact-form">
          <div className="form-row">
            <label>
              Name
              <input name="name" type="text" required />
            </label>
            <label>
              Email
              <input name="email" type="email" required />
            </label>
          </div>
          <div className="form-row">
            <label>
              Phone
              <input name="phone" type="tel" />
            </label>
            <label>
              Database size
              <input
                name="databaseSize"
                type="text"
                placeholder="e.g. 500 contacts"
              />
            </label>
          </div>
          <label>
            What do you need help with?
            <select name="service" defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              <option value="database-cleaning">Database cleaning</option>
              <option value="appraisal-calling">Appraisal calling</option>
              <option value="desktop-appraisals">Desktop appraisals</option>
              <option value="multiple">A mix of services</option>
            </select>
          </label>
          <label>
            Message
            <textarea name="message" rows="4" required />
          </label>
          <button className="btn contact-submit" type="submit">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
