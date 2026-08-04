import { useEffect } from 'react';
import PropTypes from 'prop-types';

const siteUrl = 'https://datadetox.co.nz';

const defaultMeta = {
  title: 'Real Estate Database Support NZ | Data Detox',
  description:
    'Data Detox helps New Zealand real estate salespeople organise and update their databases for more confident prospecting.',
  path: '/',
};

const pages = {
  about: {
    title: 'About Data Detox | Real Estate Database Specialist',
    description:
      'Learn about Donna’s hands-on experience helping real estate salespeople maintain accurate, prospecting-ready databases.',
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
    title: 'Real Estate Database Revitalisation NZ | Data Detox',
    description:
      'We clean and organise real estate databases so salespeople can work with accurate records and uncover qualified appraisal opportunities.',
    path: '/database-revitalisation/',
  },
  'client-verification': {
    title: 'Client Verification for Real Estate NZ | Data Detox',
    description:
      'Professional client verification for New Zealand real estate salespeople, focused on updating contact details and uncovering opportunities.',
    path: '/client-verification/',
  },
  'appraisal-support': {
    title: 'Desktop Appraisal Support NZ | Data Detox',
    description:
      'Practical desktop appraisal support for real estate salespeople who need useful property insights before their next client conversation.',
    path: '/appraisal-support/',
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
