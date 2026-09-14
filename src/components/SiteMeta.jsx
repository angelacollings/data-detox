import { useEffect } from 'react';
import PropTypes from 'prop-types';

const siteUrl = 'https://datadetox.co.nz';

const defaultMeta = {
  title: 'Real Estate Database Reactivation NZ | Data Detox',
  description:
    'Donna personally calls neglected real estate database contacts, follows up past clients and appraisals, updates CRM records and hands opportunities back.',
  path: '/',
};

const pages = {
  about: {
    title: 'About Donna | Real Estate Database Support NZ | Data Detox',
    description:
      'Meet Donna and learn about her hands-on experience calling contacts, updating CRM records and completing one-off real estate database projects.',
    path: '/about/',
  },
  privacy: {
    title: 'Privacy Policy | Data Detox',
    description:
      'How Data Detox handles enquiry details, client database information and privacy requests.',
    path: '/privacy/',
  },
  terms: {
    title: 'Website Terms | Data Detox',
    description:
      'The terms for using the Data Detox website and enquiring about our real estate database services.',
    path: '/terms/',
  },
  'database-revitalisation': {
    title: 'Real Estate Database Reactivation NZ | Data Detox',
    description:
      'Donna calls neglected real estate database contacts, updates CRM records and hands genuine follow-up opportunities back to the salesperson.',
    path: '/database-revitalisation/',
  },
  'client-verification': {
    title: 'Past Client Follow-Up for Real Estate NZ | Data Detox',
    description:
      'Reconnect with past real estate clients through a defined calling project, with details updated and opportunities handed back for follow-up.',
    path: '/client-verification/',
  },
  'appraisal-preparation': {
    title: 'Real Estate Appraisal Follow-Up NZ | Data Detox',
    description:
      'Follow up old real estate appraisals with personal calls, updated CRM information and interested contacts handed back to the salesperson.',
    path: '/appraisal-preparation/',
  },
};

function setMeta(name, content, attribute = 'name') {
  let element = document.head.querySelector(`meta[${attribute}="${name}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

export default function SiteMeta({ page }) {
  useEffect(() => {
    const meta = pages[page] || defaultMeta;
    const canonicalUrl = `${siteUrl}${meta.path}`;
    let canonical = document.head.querySelector('link[rel="canonical"]');

    document.title = meta.title;
    setMeta('description', meta.description);
    setMeta('og:title', meta.title, 'property');
    setMeta('og:description', meta.description, 'property');
    setMeta('og:url', canonicalUrl, 'property');
    setMeta('twitter:title', meta.title);
    setMeta('twitter:description', meta.description);

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', canonicalUrl);
  }, [page]);

  return null;
}

SiteMeta.propTypes = {
  page: PropTypes.string.isRequired,
};
