export default function VideoCard({ href, length, title, index }) {
  return (
    <a
      className="w-full"
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="w-full border-b border-gray-200 dark:border-gray-700 py-3 transform hover:scale-[1.01] transition-all">
        <div className="flex flex-col sm:flex-row justify-between items-baseline">
          <div className="flex items-center">
            <div className="text-gray-500 dark:text-gray-400 text-left mr-6">
              {index}
            </div>
            <h4 className="text-lg font-medium w-full text-gray-800 dark:text-gray-100">
              {title}
            </h4>
          </div>
          <div className="flex items-center mt-2 sm:mt-0 w-full sm:w-auto justify-between">
            <p className="text-gray-500 dark:text-gray-400 text-left sm:text-right w-32 md:mb-0 mr-2 ml-10 sm:ml-0">
              {length}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-500 dark:text-gray-100"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
}
