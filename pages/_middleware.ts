import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

async function logPageView(req: NextRequest) {
  // Only track views in production and
  // ignore static assets from being tracked
  if (
    process.env.NODE_ENV !== 'production' ||
    req.nextUrl.pathname.startsWith('/static') ||
    req.nextUrl.pathname.startsWith('/api') ||
    req.nextUrl.pathname.startsWith('/fonts') ||
    req.nextUrl.pathname.startsWith('/logos')
  ) {
    return;
  }

  const body = JSON.stringify({
    slug: req.nextUrl.pathname,
    ua: req.ua.ua,
    ...req.geo
  });

  const request = await fetch(`${process.env.SUPABASE_URL}/rest/v1/analytics`, {
    headers: {
      apikey: process.env.SUPABASE_ANON_KEY,
      'Content-Type': 'application/json'
    },
    body,
    method: 'POST'
  });

  if (request.status !== 201) {
    console.error('Error logging analytics: ', body);
  }

  return;
}

function addSecurityHeaders(response) {
  const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com;
    child-src *.youtube.com *.google.com *.twitter.com;
    style-src 'self' 'unsafe-inline' *.googleapis.com;
    img-src * blob: data:;
    media-src 'none';
    connect-src *;
    font-src 'self';
  `;

  response.headers.set(
    'Content-Security-Policy',
    ContentSecurityPolicy.replace(/\n/g, '')
  );
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()'
  );
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  );
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-DNS-Prefetch-Control', 'on');

  return response;
}

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  // Runs after the response has been returned
  // so tracking analytics doesn't block rendering
  ev.waitUntil(
    (async () => {
      logPageView(req);
    })()
  );

  return addSecurityHeaders(NextResponse.next());
}
