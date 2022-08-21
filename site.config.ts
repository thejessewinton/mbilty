export const config = {
  siteTitle: 'Mblity',
  titleTemplate: '%s — Mblity',
  defaultTitle: 'Mblity',
  siteUrl: process.env.VERCEL_URL
    ? process.env.VERCEL_URL
    : `http://localhost:${process.env.PORT ?? 3000}`,
  description: '',
  twitter: {
    cardType: 'summary',
    site: '@thejessewinton',
    creator: '@thejessewinton',
  },
};
