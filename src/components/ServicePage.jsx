import React from 'react';
import PropTypes from 'prop-types';

const pages = {
  'database-revitalisation': {
    title: 'Database Reactivation',
    intro:
      'Reconnect with the contacts who haven’t been spoken to recently and the people who have fallen through the gaps.',
    body: [
      'I make the calls.',
      'We agree on a neglected part of your database and I work through it systematically. That might be contacts who have not heard from you recently, people who were never properly followed up, or records that no longer tell you where the relationship stands.',
      'As I speak with people, I update contact details, property information and clear notes. I also identify duplicates and correct information that is incomplete or out of date.',
      'If someone wants an appraisal, is considering selling or needs real estate advice, I hand the opportunity back to the salesperson. Not every call creates a lead, but every completed conversation gives you clearer information and follow-up.',
      'Once the agreed section has been worked through, the project is complete.',
    ],
    benefits: [
      'Calls made to neglected contacts',
      'Current details and clear conversation notes',
      'Duplicates and incomplete records identified',
      'Genuine opportunities handed back for follow-up',
    ],
  },
  'client-verification': {
    title: 'Past Client Reconnection',
    intro:
      'Reconnect with past clients and find out what has changed since you last spoke.',
    body: [
      'I make the calls.',
      'We define the group of past clients you want reconnected with and I work through them. I confirm phone numbers, email addresses, property details and other useful information, then record the outcome of each conversation in your CRM.',
      'If someone would benefit from an appraisal, is considering a move or needs a conversation with you, I flag that opportunity and hand it back for your follow-up.',
      'At the end of the project, more of your past clients have heard from you and their records give you a clearer picture of the relationship today.',
    ],
    benefits: [
      'Reconnect with contacts in an established database',
      'Confirm and update useful contact and property details',
      'Hand relevant conversations back to the salesperson',
    ],
  },
  'appraisal-preparation': {
    title: 'Appraisal Follow-Up',
    intro:
      'Follow up people you have previously appraised and find out whether they would like an updated appraisal.',
    body: [
      'I make the calls.',
      'We agree on a defined group of older appraisals and I work through them systematically. I reconnect with each person, check whether their plans or circumstances have changed and ask whether an updated appraisal would be useful.',
      'I update their details and record the result of the conversation as I go. When someone is interested in an updated appraisal or needs real estate advice, I hand that contact back to you to continue the conversation.',
      'Not every call will lead to an appraisal. The value is in completing neglected follow-up properly, identifying the opportunities that are there and leaving accurate information behind.',
    ],
    benefits: [
      'Older appraisals followed up personally',
      'Contact and property information updated',
      'Interested contacts handed back to you',
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
