import Image from 'next/image';

export default function CurrentTrack(data) {
  return (
    <div className="flex flex-row max-w-3xl w-full items-center">
      <div className="w-[100px] sm:w-[120px] relative mr-4">
        <Image
          alt="Album Art"
          height={120}
          width={120}
          src={data.albumImageUrl}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <p className="text-gray-500 truncate w-16 sm:w-24" color="gray.500">
            Track
          </p>
          <a
            className="font-medium text-gray-900 dark:text-gray-100 truncate w-60 md:w-full"
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.title}
          </a>
        </div>
        <div className="flex flex-row">
          <p className="text-gray-500 truncate w-16 sm:w-24" color="gray.500">
            Artist
          </p>
          <p className="font-medium text-gray-900 dark:text-gray-100 truncate w-60 md:w-full">
            {data.artist}
          </p>
        </div>
        <div className="flex flex-row">
          <p className="text-gray-500 truncate w-16 sm:w-24" color="gray.500">
            Album
          </p>
          <a
            className="font-medium text-gray-900 dark:text-gray-100 truncate w-60 md:w-full"
            href={data.albumUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.album}
          </a>
        </div>
        {data.playlist && data.playlistUrl ? (
          <div className="flex flex-row">
            <p className="text-gray-500 truncate w-16 sm:w-24" color="gray.500">
              Playlist
            </p>
            <a
              className="font-medium text-gray-900 dark:text-gray-100 truncate w-60 md:w-full"
              href={data.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.playlist}
            </a>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
