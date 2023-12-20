export const getAccessToken = async () => {
  const basic = btoa(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  );
  try {
    const tokenResponse = await fetch(process.env.SPOTIFY_TOKEN_ENDPOINT!, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!
      })
    });
    return tokenResponse.json();
  } catch (e) {
    console.log(e);
    return {
      status: 'error'
    };
  }
};

export const getNowPlaying = async (token: string) => {
  const data = fetch(process.env.SPOTIFY_NOW_PLAYING_ENDPOINT!, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    // next: { revalidate: 1 }
    cache: 'no-cache'
  });
  return data;
};
