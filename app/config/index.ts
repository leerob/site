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
