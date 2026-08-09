import React from 'react';
import PropTypes from 'prop-types';

const pages = {
  'database-revitalisation': {
    title: 'Database Revitalisation',
    intro:
      'A real estate database is never finished. People move house, change phone numbers, update email addresses, and their property plans change over time. Because salespeople are busy listing and selling, keeping the database up to date often slips down the priority list.',
    body: [
      'That’s where Data Detox comes in.',
      'I work through your database to make sure the information is accurate, consistent, and easy to use. I update contact details, organise attributes and lead scores, record clear notes, remove duplicate information, and make sure your database reflects what’s happening today, not what was happening three years ago.',
      'As part of the process, I can also contact past clients to confirm their details and offer an updated appraisal where appropriate. If someone mentions they’re thinking about buying or selling, I record the information and pass it back to the salesperson to follow up.',
      'When the work is finished, your database is easier to search, easier to trust, and ready to support your prospecting. A healthy database helps salespeople reconnect with clients, identify opportunities, and spend more time building relationships instead of searching for information.',
    ],
    benefits: [
      'Accurate contact details, attributes and lead scores',
      'Clear notes and duplicate information removed',
      'Past-client verification and appraisal conversations',
      'Useful opportunities recorded for your follow-up',
    ],
  },
  'client-verification': {
    title: 'Client Verification',
    intro:
      'Over time, contact details change, people move, and property plans evolve. Client Verification is designed to make sure the information in your NurtureCloud database is accurate and up to date.',
    body: [
      'I call through your database to confirm phone numbers, email addresses, postal addresses, and other key contact information. Every conversation is recorded, ensuring your CRM reflects current information and giving your team confidence in the data they’re using.',
      'These conversations also provide a natural opportunity to offer an updated appraisal and identify clients who may be considering buying or selling. Any opportunities are recorded and referred back to the agent, so they can continue the conversation and provide the right advice.',
      'By the end of the process, your database is more accurate, your client records are more complete, and your team has a stronger foundation for prospecting and relationship building.',
    ],
    benefits: [
      'Reconnect with contacts in an established database',
      'Confirm and update useful contact details',
      'Record relevant information for future follow-up',
    ],
  },
  'appraisal-preparation': {
    title: 'Appraisal Preparation',
    intro:
      'Less time behind the computer. More time in front of clients.',
    body: [
      'When appraisal requests start coming in, the preparation can quickly become time-consuming. Data Detox can take care of the groundwork, so you can focus on meeting with clients, listing property, and growing your business.',
      'Each desktop appraisal is prepared in Property Smarts with the property details completed, a professionally written property description, and three carefully selected comparable sales with a brief summary of each. Everything is prepared and ready for your final review.',
      'The final appraisal price and commission are left for you to complete. You remain in control of your professional advice, while Data Detox takes care of the preparation behind the scenes, helping you respond to appraisal requests more efficiently.',
    ],
    benefits: [
      'Property details completed in Property Smarts',
      'A professionally written property description',
      'Three carefully selected and summarised comparable sales',
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
          {service.body && (
            <div className="service-page-narrative">
              {service.body.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={index === 0 ? 'service-page-lead' : undefined}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}
          <div className="service-page-card">
            <h3>{service.body ? 'What this can include' : 'How we can help'}</h3>
            <ul>
              {service.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
            <a className="btn" href="/#contact">
              Book a discovery call
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
