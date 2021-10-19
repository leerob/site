import type { NextFetchEvent } from 'next/server';
import { NextResponse as Response } from 'next/server';

export default function middleware(ev: NextFetchEvent) {
  // Cache my self-hosted font for-ev-er
  if (ev.request.nextUrl.pathname === '/fonts/ibm-plex-sans-var.woff2') {
    return ev.respondWith(
      new Response(null, {
        headers: {
          ...ev.request.headers,
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      })
    );
  }

  const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com cdn.usefathom.com;
    child-src *.youtube.com *.google.com *.twitter.com;
    style-src 'self' 'unsafe-inline' *.googleapis.com;
    img-src * blob: data:;
    media-src 'none';
    connect-src *;
    font-src 'self';
    `;

  // https://nextjs.org/docs/advanced-features/security-headers
  ev.respondWith(
    new Response(null, {
      headers: {
        ...ev.request.headers,
        'Content-Security-Policy': ContentSecurityPolicy.replace(/\n/g, ''),
        'Referrer-Policy': 'origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
        'Strict-Transport-Security':
          'max-age=31536000; includeSubDomains; preload',
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
        'X-DNS-Prefetch-Control': 'on',
        'X-Edge': 'true'
      }
    })
  );
}
