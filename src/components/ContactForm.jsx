import React, { useState } from 'react';

export default function ContactForm() {
  const [errors, setErrors] = useState({});

  const clearError = (event) => {
    const { name } = event.target;

    if (errors[name]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    const name = form.elements.namedItem('name');
    const email = form.elements.namedItem('email');
    const message = form.elements.namedItem('message');
    const nextErrors = {};

    if (!name.value.trim()) {
      nextErrors.name = 'Enter your name.';
    }

    if (!email.value.trim()) {
      nextErrors.email = 'Enter your email address.';
    } else if (!email.validity.valid) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (!message.value.trim()) {
      nextErrors.message = 'Tell us what you need help with.';
    }

    if (Object.keys(nextErrors).length > 0) {
      event.preventDefault();
      setErrors(nextErrors);
      form.elements.namedItem(Object.keys(nextErrors)[0]).focus();
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div className="contact-copy">
          <div className="eyebrow">Start a conversation</div>
          <h2 className="section-title">Let&apos;s see if we&apos;re a good fit.</h2>
          <p>
            Every salesperson&apos;s database is different. Book a 15-minute phone
            or Zoom call and we&apos;ll discuss your database, your goals and whether
            Data Detox is the right solution for you.
          </p>
          <ul className="contact-points">
            <li>No obligation and no hard sell</li>
            <li>A practical conversation about your current database</li>
            <li>A clear next step if Data Detox can help</li>
          </ul>
          <p className="contact-direct">
            Prefer email?{' '}
            <a href="mailto:hello@datadetox.co.nz">hello@datadetox.co.nz</a>
          </p>
        </div>

        <form
          action="/contact.php"
          method="POST"
          className="contact-form"
          noValidate
          onSubmit={handleSubmit}
        >
          <p className="form-required-note">
            Fields marked <span aria-hidden="true">*</span> are required.
          </p>
          {Object.keys(errors).length > 0 && (
            <div className="form-error-summary" role="alert">
              Please correct the highlighted fields.
            </div>
          )}
          <label className="form-extra-field" aria-hidden="true">
            Website
            <input
              name="website"
              type="text"
              tabIndex="-1"
              autoComplete="off"
              aria-hidden="true"
            />
          </label>
          <div className="form-row">
            <label>
              <span>
                Name <span aria-hidden="true">*</span>
              </span>
              <input
                name="name"
                type="text"
                autoComplete="name"
                required
                aria-invalid={errors.name ? 'true' : undefined}
                aria-describedby={errors.name ? 'name-error' : undefined}
                onChange={clearError}
              />
              {errors.name && (
                <span id="name-error" className="form-error">
                  {errors.name}
                </span>
              )}
            </label>
            <label>
              <span>
                Email <span aria-hidden="true">*</span>
              </span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                aria-invalid={errors.email ? 'true' : undefined}
                aria-describedby={errors.email ? 'email-error' : undefined}
                onChange={clearError}
              />
              {errors.email && (
                <span id="email-error" className="form-error">
                  {errors.email}
                </span>
              )}
            </label>
          </div>
          <div className="form-row">
            <label>
              Phone
              <input name="phone" type="tel" autoComplete="tel" />
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
                Select an area
              </option>
              <option value="database-revitalisation">Database revitalisation</option>
              <option value="client-verification">Client verification</option>
              <option value="appraisal-support">Appraisal support</option>
              <option value="database-health">Ongoing database health</option>
              <option value="unsure">Not sure yet</option>
            </select>
          </label>
          <label>
            <span>
              Message <span aria-hidden="true">*</span>
            </span>
            <textarea
              name="message"
              rows="4"
              required
              aria-invalid={errors.message ? 'true' : undefined}
              aria-describedby={errors.message ? 'message-error' : undefined}
              onChange={clearError}
            />
            {errors.message && (
              <span id="message-error" className="form-error">
                {errors.message}
              </span>
            )}
          </label>
          <button className="btn contact-submit" type="submit">
            Request a discovery call
          </button>
        </form>
      </div>
    </section>
  );
}
