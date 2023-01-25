/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  experimental: {
    appDir: true,
    swcMinify: true
  },
  images: {
    domains: [
      'cdn.sanity.io' // Sanity images
    ],
    formats: ['image/webp']
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders
      }
    ];
  }
};

const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline'  *.spotify.com *.youtube.com;
    child-src *.youtube.com  *.spotify.com ;
    style-src 'self' 'unsafe-inline'  *.spotify.com;
    img-src * blob: data:;
    media-src  *.spotify.com;
    connect-src *;
    font-src 'self';
`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, '')
  },
  {
    key: 'Referrer-Policy',
    value: 'same-origin'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  }
];
