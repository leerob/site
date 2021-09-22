import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { ITopTracks } from 'lib/types';
import Track from 'components/Track';

export default function TopTracks() {
  const { data } = useSWR<ITopTracks>('/api/top-tracks', fetcher);

  if (!data) {
    return null;
  }

  return (
    <>
      {data.tracks.map((track, index) => (
        <Track ranking={index + 1} key={track.songUrl} {...track} />
      ))}
    </>
  );
}
