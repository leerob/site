import { getNowPlaying } from '@/app/lib/spotify';

export interface ICurrentlyPlaying {
  songUrl?: string;
  artist?: string;
  title?: string;
  isPlaying: boolean;
}
// export const fetchCache = 'force-no-store';
// export const dynamic = 'force-dynamic';
// export const runtime = 'edge';
export const revalidate = 0;

export async function GET(request: Request, response: Response) {
  const res = await getNowPlaying();
  // if (res.status === 204 || res.status > 400) {
  //   return Response.json({ is_playing: false });
  // }
  const data = await res.json();

  // const resp = {
  //   isPlaying: data.is_playing,
  //   title: data.item.name,
  //   artist: data.item.album.artists
  //     .map((artist: { name: string }) => artist.name)
  //     .join(', '),
  //   songUrl: data.item.external_urls.spotify
  // };

  return Response.json({
    data
  });
}
