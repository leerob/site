import { google } from 'googleapis';

import googleAuth from '../../lib/google/auth';

export default async (_, res) => {
  const auth = await googleAuth.getClient();
  const youtube = google.youtube({
    auth,
    version: 'v3'
  });

  const response = await youtube.channels.list({
    id: 'UCZMli3czZnd1uoc1ShTouQw',
    part: 'statistics'
  });

  const channel = response.data.items[0];
  const { subscriberCount, viewCount } = channel.statistics;

  return res.status(200).json({
    subscriberCount,
    viewCount
  });
};
