/**
 * @type {import('next').NextConfig}
 */
module.exports = {
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
    browsersListForSwc: true,
    images: { allowFutureImage: true }
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg')
    );
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve('@svgr/webpack')
    });
    return config;
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
    script-src 'self'  *.goatcounter.com *.panelbear.com;
    style-src 'self';
    img-src * blob: data:;
    media-src 'none';
    connect-src *;
    font-src 'self';
`;

// const ContentSecurityPolicy = `
//     default-src 'self';
//     script-src 'self' 'unsafe-eval' 'unsafe-inline' *.goatcounter.com *.panelbear.com;
//     child-src *.youtube.com;
//     style-src 'self' 'unsafe-inline';
//     img-src * blob: data:;
//     media-src 'none';
//     connect-src *;
//     font-src 'self';
// `;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, '')
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
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
  }
];
