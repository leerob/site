export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export interface ICurrentlyPlaying {
  songUrl?: string;
  artist?: string;
  title?: string;
  isPlaying: boolean;
}

async function getAccessToken() {
  const basic = btoa(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  );
  const response = await fetch(
    process.env.NEXT_PUBLIC_SPOTIFY_TOKEN_ENDPOINT!,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: process.env.SPOTIFY_REFRESH_TOKEN
      })
    }
  );
  return response.json();
}

async function getNowPlaying() {
  const data = await getAccessToken();
  console.log('Access token data is: ', data);
  const { access_token } = data;
  return fetch(process.env.NEXT_PUBLIC_SPOTIFY_NOW_PLAYING_ENDPOINT!, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
}

export async function POST(request: Request) {
  const res = await getNowPlaying();
  // TODO: return Error
  if (res.status === 204 || res.status > 400) {
    return Response.json({ isPlaying: false });
  }

  const song = await res.json();

  const title = song.item.name;
  const artist = song.item.artists
    .map((_artist: { name: string }) => _artist.name)
    .join(', ');
  const songUrl = song.item.external_urls.spotify;

  return Response.json({
    artist,
    songUrl,
    title,
    isPlaying: true
  });
}
