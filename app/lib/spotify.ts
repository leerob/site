export const getAccessToken = async () => {
  const basic = btoa(
    `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`
  );
  // const basic = Buffer.from(
  //   `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  // ).toString('base64');
  try {
    const tokenResponse = await fetch(
      process.env.NEXT_PUBLIC_SPOTIFY_TOKEN_ENDPOINT!,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${basic}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          grant_type: 'refresh_token',
          refresh_token: process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN!
        })
      }
    );
    return tokenResponse.json();
  } catch (e) {
    console.log(e);
    return {
      status: 'error'
    };
  }
};

export const getNowPlaying = async (token: string) => {
  return fetch(process.env.NEXT_PUBLIC_SPOTIFY_NOW_PLAYING_ENDPOINT!, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
