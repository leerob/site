const title = 'Lee Robinson – Developer, writer, creator.';
const description =
  'Front-end developer, JavaScript enthusiast, and the creator of Mastering Next.js.';

const SEO = {
  title,
  description,
  canonical: 'https://leerob.io',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://leerob.io',
    title,
    description,
    images: [
      {
        url: 'https://leerob.io/static/images/og-banner.png',
        alt: title
      }
    ]
  },
  twitter: {
    handle: '@leeerob',
    site: '@leeerob',
    cardType: 'summary_large_image'
  }
};

export default SEO;
