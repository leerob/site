import { getNowPlaying } from '@/app/lib/spotify-api';

export default async function GET() {
  const res = await getNowPlaying();
  // TODO: return Error
  if (res.status === 204 || res.status > 400) {
    return Response.json({ isPlaying: false });
  }

  const song = await res.json();
  if (song.item === null) {
    return Response.json({ isPlaying: false });
  }

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

export const config = {
  runtime: 'edge'
};
