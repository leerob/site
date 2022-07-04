import { type NextRequest } from 'next/server';
import { getNowPlaying } from '@/lib/spotify';
import { TCurrentlyPlayingTrack } from '@/typings/types';
export const config = {
  runtime: 'experimental-edge'
};

export default async function handler(
  req: NextRequest
): Promise<TCurrentlyPlayingTrack | Response> {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return new Response(JSON.stringify({ isPlaying: false }), {
      status: 200,
      headers: {
        'content-type': 'application/json'
      }
    });
  }
  // TODO: fix missing 'artists' property
  const song: SpotifyApi.CurrentPlaybackResponse = await response.json();
  if (song.item === null) {
    return new Response(JSON.stringify({ isPlaying: false }), {
      status: 200,
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  const title = song.item.name;
  const artist = song.item.artists.map((_artist) => _artist.name).join(', ');
  const songUrl = song.item.external_urls.spotify;
  return new Response(
    JSON.stringify({
      artist,
      songUrl,
      title
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, s-maxage=60, stale-while-revalidate=30'
      }
    }
  );
}
