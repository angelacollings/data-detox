import { mkdir, readFile, writeFile } from 'node:fs/promises';

const distDirectory = new URL('../dist/', import.meta.url);
const sourceHtml = await readFile(new URL('index.html', distDirectory), 'utf8');
const siteUrl = 'https://datadetox.co.nz';

const routes = {
  about: {
    title: 'About Data Detox | Real Estate Database Specialist',
    description:
      'Learn about Donna’s hands-on experience helping real estate salespeople maintain accurate, prospecting-ready databases.',
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
  'database-revitalisation': {
    title: 'Real Estate Database Revitalisation NZ | Data Detox',
    description:
      'We clean and organise real estate databases so salespeople can work with accurate records and uncover qualified appraisal opportunities.',
  },
  'client-verification': {
    title: 'Client Verification for Real Estate NZ | Data Detox',
    description:
      'Professional client verification for New Zealand real estate salespeople, focused on updating contact details and uncovering opportunities.',
  },
  'appraisal-preparation': {
    title: 'Appraisal Preparation NZ | Data Detox',
    description:
      'Professional desktop appraisal preparation in Property Smarts for real estate salespeople who want more time with clients.',
  },
};

for (const [route, meta] of Object.entries(routes)) {
  const canonicalUrl = `${siteUrl}/${route}/`;
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
