import React from 'react';
import PropTypes from 'prop-types';

const pages = {
  'database-cleaning': {
    title: 'Database Cleaning',
    intro:
      'We turn messy, outdated real estate databases into accurate, organised systems that are easier to use.',
    benefits: [
      'Identify missing, duplicated or inconsistent records',
      'Standardise useful contact and property information',
      'Create a cleaner foundation for confident prospecting',
    ],
  },
  'database-calling': {
    title: 'Database Calling',
    intro:
      'We call through real estate databases professionally to update information and uncover appraisal opportunities.',
    benefits: [
      'Reconnect with contacts in an established database',
      'Confirm and update useful contact details',
      'Record relevant information for future follow-up',
    ],
  },
  'desktop-appraisals': {
    title: 'Desktop Appraisals',
    intro:
      'We prepare practical desktop appraisal support so agents have useful property information before the next conversation.',
    benefits: [
      'Organise available property and market information',
      'Support faster preparation before client conversations',
      'Keep useful appraisal details connected to the database',
    ],
  },
};

export function getServicePage(page) {
  return pages[page] || null;
}

export default function ServicePage({ page }) {
  const service = getServicePage(page);

  if (!service) {
    return null;
  }

  return (
    <main id="main-content" className="service-page" tabIndex="-1">
      <section className="section">
        <div className="container service-page-inner">
          <a className="back-link" href="/#services">
            Back to services
          </a>
          <div className="section-header service-page-header">
            <h1>{service.title}</h1>
            <p>{service.intro}</p>
          </div>
          <div className="service-page-card">
            <h3>How we can help</h3>
            <ul>
              {service.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
            <a className="btn" href="/#contact">
              Talk to us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

ServicePage.propTypes = {
  page: PropTypes.oneOf(Object.keys(pages)).isRequired,
};
