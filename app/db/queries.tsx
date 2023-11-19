'use server';

import { google } from 'googleapis';
import { sql } from '@vercel/postgres';
import { unstable_cache } from 'next/cache';

let googleAuth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  },
  scopes: ['https://www.googleapis.com/auth/youtube.readonly'],
});

let youtube = google.youtube({
  version: 'v3',
  auth: googleAuth,
});

export const getBlogViews = unstable_cache(
  async () => {
    if (!process.env.DATABASE_URL) {
      return 0;
    }

    let data = await sql`
      SELECT count
      FROM views
    `;

    return data.rows.reduce((acc, curr) => acc + Number(curr.count), 0);
  },
  ['blog-views-sum'],
  {
    revalidate: 1,
  }
);

export const getViewsCount = unstable_cache(
  async () => {
    let data = await sql`
      SELECT slug, count
      FROM views
    `;

    return data.rows as { slug: string; count: number }[];
  },
  ['all-views'],
  {
    revalidate: 1,
  }
);

export const getLeeYouTubeSubs = unstable_cache(
  async () => {
    let response = await youtube.channels.list({
      id: ['UCZMli3czZnd1uoc1ShTouQw'],
      part: ['statistics'],
    });

    let channel = response.data.items![0];
    return Number(channel?.statistics?.subscriberCount).toLocaleString();
  },
  ['leerob-youtube-subs'],
  {
    revalidate: 3600,
  }
);

export const getVercelYouTubeSubs = unstable_cache(
  async () => {
    let response = await youtube.channels.list({
      id: ['UCLq8gNoee7oXM7MvTdjyQvA'],
      part: ['statistics'],
    });

    let channel = response.data.items![0];
    return Number(channel?.statistics?.subscriberCount).toLocaleString();
  },
  ['vercel-youtube-subs'],
  {
    revalidate: 3600,
  }
);

export async function getGuestbookEntries() {
  let entries = await sql`
    SELECT id, body, created_by, updated_at
    FROM guestbook
    ORDER BY updated_at DESC
    LIMIT 100
  `;
  return entries.rows;
}
