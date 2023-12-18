export interface ICurrentlyPlaying {
  songUrl?: string;
  artist?: string;
  title?: string;
  isPlaying: boolean;
}

// export const dynamic = 'force-dynamic';
// export const runtime = 'edge';
// export const revalidate = 60;

const getAccessToken = async () => {
  const basic = btoa(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  );
  // const basic = Buffer.from(
  //   `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  // ).toString('base64');

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
};

export async function GET(request: Request, response: Response) {
  const tokenData = await getAccessToken();
  const res = await fetch(
    process.env.NEXT_PUBLIC_SPOTIFY_NOW_PLAYING_ENDPOINT!,
    {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`
      }
    }
  );
  if (res.status === 204 || res.status > 400) {
    return Response.json({ is_playing: false });
  }
  const data = await res.json();

  const resp = {
    isPlaying: data.is_playing,
    title: data.item.name,
    artist: data.item.album.artists
      .map((artist: { name: string }) => artist.name)
      .join(', '),
    songUrl: data.item.external_urls.spotify
  };

  return Response.json({
    resp
  });
}
