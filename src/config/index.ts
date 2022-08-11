export const NAV_LINKS = [
  { href: '/', text: 'About' },
  { href: '/blog', text: 'Blog' },
  { href: '/snippets', text: 'Snippets' }
];

export const AUTHOR = {
  name: 'Dzmitry Svirin',
  email: 'svirins@gmail.com',
  link: 'https://twitter.com/svirins'
};

export const DEFAULT_SEO = {
  title: 'Developer portfolio site',
  description: 'Default description',
  openGraph: {
    titleTemplate: 'Default description',
    description: 'Default description.',
    type: 'website',
    url: 'https://www.svirins.codes/',
    site_name: 'Default description'
  },
  twitter: {
    handle: '@svirins',
    site: '@site',
    cardType: 'summary_large_image'
  }
};

export const SANITY_CONFIG = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV !== 'production',
  apiVersion: '2021-03-25'
};

export const SPOTIFY_NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

export const SPOTIFY_TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

export const WAKATIME_API_ENDPOINT = `https://wakatime.com/api/v1/users/svirins/stats/last_7_days`;

export const POSTS_LIMIT = 200;

export const TYPED_STRINGS = [
  `Thanks for reading!`,
  'Მადლობა წაკითხვისთვის!',
  `Danke fürs Lesen!`,
  `Дзякуй за чытанне!`,
  `Merci de nous lire !`,
  `¡Gracias por leer!`,
  `Dzięki za przeczytanie!`,
  `Дякую за читання!`,
  `Grazie per aver letto!`
];
