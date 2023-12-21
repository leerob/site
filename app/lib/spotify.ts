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

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();
  // console.log('access token is: ', access_token);

  const spotifyResponse = await fetch(
    process.env.SPOTIFY_NOW_PLAYING_ENDPOINT!,
    {
      headers: {
        Authorization: `Bearer ${access_token}`
      },
      next: { revalidate: 1 }
      // cache: 'no-cache'
    }
  );
  const data = await spotifyResponse.json();
  if (data.error?.status || data?.is_playing === false) {
    console.log(data.error);
    return {
      is_playing: false
    };
  }
  console.log('spotify data is: ', data);
  const title = data?.item.name;
  const artist = data?.item.artists
    .map((_artist: { name: string }) => _artist.name)
    .join(', ');
  const songUrl = data?.item.external_urls.spotify;
  // TODO: IMPORTANT - process not-playing case
  return {
    title,
    artist,
    songUrl,
    is_playing: data.is_playing
  };
};
