import 'server-only';

import { google } from 'googleapis';
import { queryBuilder } from 'lib/planetscale';
import { unstable_cache } from 'next/cache';

const googleAuth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  },
  scopes: ['https://www.googleapis.com/auth/youtube.readonly'],
});

const youtube = google.youtube({
  version: 'v3',
  auth: googleAuth,
});

export const getBlogViews = unstable_cache(
  async () => {
    if (!process.env.DATABASE_URL) {
      return 0;
    }

    const data = await queryBuilder
      .selectFrom('views')
      .select(['count'])
      .execute();

    return data.reduce((acc, curr) => acc + Number(curr.count), 0);
  },
  ['blog-views-sum'],
  {
    revalidate: 5,
  }
);

export const getViewsCount = unstable_cache(
  async () => {
    return queryBuilder.selectFrom('views').select(['slug', 'count']).execute();
  },
  ['all-views'],
  {
    revalidate: 5,
  }
);

export const getLeeYouTubeSubs = unstable_cache(
  async () => {
    const response = await youtube.channels.list({
      id: ['UCZMli3czZnd1uoc1ShTouQw'],
      part: ['statistics'],
    });

    let channel = response.data.items![0];
    return Number(channel?.statistics?.subscriberCount);
  },
  ['leerob-youtube-subs'],
  {
    revalidate: 3600,
  }
);

export const getVercelYouTubeSubs = unstable_cache(
  async () => {
    const response = await youtube.channels.list({
      id: ['UCLq8gNoee7oXM7MvTdjyQvA'],
      part: ['statistics'],
    });

    let channel = response.data.items![0];
    return Number(channel?.statistics?.subscriberCount);
  },
  ['vercel-youtube-subs'],
  {
    revalidate: 3600,
  }
);
