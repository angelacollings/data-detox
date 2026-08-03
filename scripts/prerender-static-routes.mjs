import { mkdir, readFile, writeFile } from 'node:fs/promises';

const distDirectory = new URL('../dist/', import.meta.url);
const sourceHtml = await readFile(new URL('index.html', distDirectory), 'utf8');
const siteUrl = 'https://datadetox.co.nz';

const routes = {
  about: {
    title: 'About Data Detox | Real Estate Database Specialists',
    description:
      'Learn about the Data Detox vision and Donna’s hands-on experience helping real estate professionals maintain accurate, prospecting-ready CRM data.',
  },
  privacy: {
    title: 'Privacy Policy | Data Detox',
    description:
      'How Data Detox handles enquiry details, client database information and privacy requests.',
  },
  terms: {
    title: 'Website Terms | Data Detox',
    description:
      'The terms for using the Data Detox website and enquiring about our real estate database services.',
  },
  'database-cleaning': {
    title: 'Real Estate Database Cleaning NZ | Data Detox',
    description:
      'We clean and organise real estate databases so agents can work with accurate records and uncover qualified appraisal opportunities.',
  },
  'database-calling': {
    title: 'Real Estate Database Calling NZ | Data Detox',
    description:
      'Professional database calling for New Zealand real estate teams, focused on updating contact details and uncovering opportunities.',
  },
  'desktop-appraisals': {
    title: 'Desktop Appraisal Support NZ | Data Detox',
    description:
      'Practical desktop appraisal support for real estate agents who need useful property insights before their next client conversation.',
  },
};

for (const [route, meta] of Object.entries(routes)) {
  const canonicalUrl = `${siteUrl}/${route}`;
  const routeDirectory = new URL(`${route}/`, distDirectory);
  const routeHtml = sourceHtml
    .replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`)
    .replace(
      /(<meta\s+name="description"\s+content=").*?("\s*\/>)/s,
      `$1${meta.description}$2`
    )
    .replace(
      /(<link\s+rel="canonical"\s+href=").*?("\s*\/>)/s,
      `$1${canonicalUrl}$2`
    )
    .replace(
      /(<meta\s+property="og:title"\s+content=").*?("\s*\/>)/s,
      `$1${meta.title}$2`
    )
    .replace(
      /(<meta\s+property="og:description"\s+content=").*?("\s*\/>)/s,
      `$1${meta.description}$2`
    )
    .replace(
      /(<meta\s+property="og:url"\s+content=").*?("\s*\/>)/s,
      `$1${canonicalUrl}$2`
    )
    .replace(
      /(<meta\s+name="twitter:title"\s+content=").*?("\s*\/>)/s,
      `$1${meta.title}$2`
    )
    .replace(
      /(<meta\s+name="twitter:description"\s+content=").*?("\s*\/>)/s,
      `$1${meta.description}$2`
    );

  await mkdir(routeDirectory, { recursive: true });
  await writeFile(new URL('index.html', routeDirectory), routeHtml);
}
