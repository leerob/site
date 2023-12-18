const getAccessToken = async () => {
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
};

export const getNowPlaying = async () => {
  const tokenData = await getAccessToken();
  const { access_token } = tokenData;
  // TODO: Handle error case
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_SPOTIFY_NOW_PLAYING_ENDPOINT!,
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }
    );
    return response.json();
  } catch (e) {
    console.log(e);
  }
};
