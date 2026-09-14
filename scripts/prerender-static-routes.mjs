import { mkdir, readFile, writeFile } from 'node:fs/promises';

const distDirectory = new URL('../dist/', import.meta.url);
const sourceHtml = await readFile(new URL('index.html', distDirectory), 'utf8');
const siteUrl = 'https://datadetox.co.nz';

const routes = {
  about: {
    title: 'About Donna | Real Estate Database Support NZ | Data Detox',
    description:
      'Meet Donna and learn about her hands-on experience calling contacts, updating CRM records and completing one-off real estate database projects.',
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
    title: 'Real Estate Database Reactivation NZ | Data Detox',
    description:
      'Donna calls neglected real estate database contacts, updates CRM records and hands genuine follow-up opportunities back to the salesperson.',
  },
  'client-verification': {
    title: 'Past Client Follow-Up for Real Estate NZ | Data Detox',
    description:
      'Reconnect with past real estate clients through a defined calling project, with details updated and opportunities handed back for follow-up.',
  },
  'appraisal-preparation': {
    title: 'Real Estate Appraisal Follow-Up NZ | Data Detox',
    description:
      'Follow up old real estate appraisals with personal calls, updated CRM information and interested contacts handed back to the salesperson.',
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
