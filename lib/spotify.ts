const NOW_PLAYING_ENDPOINT =
  'https://gl7wpos77jdmbicwlbuwg5p4wi0ryqby.lambda-url.us-west-2.on.aws';

export const getNowPlaying = async () => {
  return await fetch(NOW_PLAYING_ENDPOINT);
};
