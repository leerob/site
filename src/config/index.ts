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
  title: `Dzmitry Sviryn's personal website`,
  description:
    'A full-stack developer passionate about React ecosystem, TypeScript and serverless backends',
  canonical: 'https://www.svirins.codes/',
  openGraph: {
    title: `Dzmitry Sviryn's personal website`,
    description:
      'A full-stack developer passionate about React ecosystem, TypeScript and serverless backends.',
    type: 'website',
    url: 'https://www.svirins.codes/',
    site_name: 'svirins.codes',
    images: [
      {
        url: 'https://www.svirins.codes/social-banner.webp',
        width: 1200,
        height: 675,
        alt: 'My cat and my gear',
        type: 'image/webp'
      }
    ]
  },
  twitter: {
    handle: '@svirins',
    site: '@svirins',
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
