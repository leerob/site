import dotenv from 'dotenv';

export default async function robots() {
  dotenv.config();
  const URL = process.env.APP_URL || 'http://localhost';
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: URL + '/sitemap.xml',
    host: URL,
  };
}
