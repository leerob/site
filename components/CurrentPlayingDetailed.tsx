import fetcher from 'lib/fetcher';
import { NowPlayingSongDetailed } from 'lib/types';
import useSWR from 'swr';
import CurrentTrack from './CurrentTrack';

export default function Tracks() {
  const { data } = useSWR<NowPlayingSongDetailed>(
    '/api/now-playing-detailed',
    fetcher,
  );

  if (!data || data.isPlaying === false) {
    return null;
  }

  return (
    <>
      <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
        Currently Playing
      </h2>
      <CurrentTrack {...data} />
    </>
  );
}
