import format from 'comma-number';

export default function VideoCard({ id, snippet, statistics }) {
  return (
    <a
      className="w-full"
      href={`https://www.youtube.com/watch?v=${id}`}
      aria-label={snippet.title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="mb-8 w-full">
        <div className="flex flex-col md:flex-row justify-between">
          <h4 className="text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100">
            {snippet.title}
          </h4>
          <p className="text-gray-500 text-left md:text-right w-32 mb-4 md:mb-0">
            {`${format(statistics.viewCount)} views`}
          </p>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          {snippet.description.slice(0, 85) + '...'}
        </p>
      </div>
    </a>
  );
}
