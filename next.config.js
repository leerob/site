/**
 * @type {import('next').NextConfig}
 */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false
});

module.exports = withBundleAnalyzer({
  // compiler: {
  //   removeConsole: {
  //     exclude: ['error']
  //   }
  // },
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.sanity.io' // Sanity images
    ],
    formats: ['image/webp']
  },
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders
      }
    ];
  }
});

const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.goatcounter.com  *.spotify.com *.youtube.com;
    child-src *.youtube.com  *.spotify.com;
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
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  }
];
