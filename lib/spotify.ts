const NOW_PLAYING_ENDPOINT =
  'https://gl7wpos77jdmbicwlbuwg5p4wi0ryqby.lambda-url.us-west-2.on.aws';
const TOP_TRACKS_ENDPOINT =
  'https://bv2ink2d4ipdqx42j4l7tnwpom0ieepu.lambda-url.us-west-2.on.aws';

export const getNowPlaying = async () => {
  return await fetch(NOW_PLAYING_ENDPOINT);
};

export const getTopTracks = async () => {
  return await fetch(TOP_TRACKS_ENDPOINT);
};
