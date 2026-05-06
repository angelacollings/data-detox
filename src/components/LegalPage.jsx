import React from 'react';
import PropTypes from 'prop-types';

const pages = {
  privacy: {
    title: 'Privacy Policy',
    intro:
      'How Data Detox handles enquiry details, client database information, and privacy requests.',
    sections: [
      {
        heading: 'Information we collect',
        body: 'Data Detox collects the personal information you choose to provide through the contact form, such as your name, email address, phone number, database size, service interest, and message.',
      },
      {
        heading: 'How we use it',
        body: 'We use this information to respond to enquiries, understand the work requested, provide quotes, and deliver agreed services. We only collect information that is useful for those purposes.',
      },
      {
        heading: 'Client database information',
        body: 'Client database information is treated as confidential and is used only to provide the agreed service. We do not sell, rent, or reuse client database information for unrelated marketing.',
      },
      {
        heading: 'Access and correction',
        body: 'You can ask to access or correct personal information we hold about you. Contact us using the enquiry form if you would like to make a privacy request.',
      },
    ],
  },
  terms: {
    title: 'Terms',
    intro:
      'The basic terms for using this website and enquiring about Data Detox services.',
    sections: [
      {
        heading: 'Website information',
        body: 'The information on this website is general and does not create a client relationship by itself. Work begins only once scope, pricing, timing, and any required access details have been agreed.',
      },
      {
        heading: 'Quotes and scope',
        body: 'Any quotes or service descriptions are subject to the condition and size of the database, the calling requirements, and the appraisal support requested.',
      },
      {
        heading: 'Client responsibility',
        body: 'Clients are responsible for ensuring they have the right to provide database information to Data Detox and to request contact work on that database.',
      },
      {
        heading: 'Service outcomes',
        body: 'Data Detox takes reasonable care with information supplied by clients, but does not guarantee that every record can be corrected, contacted, or converted into an appraisal opportunity.',
      },
    ],
  },
};

export function getLegalPage(page) {
  return pages[page] || null;
}

export default function LegalPage({ page }) {
  const content = getLegalPage(page);

  if (!content) {
    return null;
  }

  return (
    <main className="legal-page">
      <section className="section">
        <div className="container legal-page-inner">
          <a className="back-link" href="/">
            Back to home
          </a>
          <div className="section-header">
            <h2>{content.title}</h2>
            <p>{content.intro}</p>
          </div>
          <div className="legal-page-content">
            {content.sections.map((section) => (
              <article key={section.heading} className="legal-page-section">
                <h3>{section.heading}</h3>
                <p>{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

LegalPage.propTypes = {
  page: PropTypes.oneOf(['privacy', 'terms']).isRequired,
};
