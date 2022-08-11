import Link from 'next/link';

import StackIcon from '@/components/StackIcon';
import { ISnippet } from '@/typings';

export default function SnippetPreview({
  title,
  description,
  slug,
  iconTitle,
  ...rest
}: Partial<ISnippet>) {
  return (
    <>
      <Link href={`/snippets/${slug}`}>
        <a
          className="p-4 w-full border border-gray-400 dark:border-gray-700 rounded  transition-all   hover:border-active/50 dark:hover:border-active/50 duration-150 ease-in-out [&>h3]:  [&>h3]:hover:text-active"
          {...rest}
        >
          <div className="pb-2 float-right  scale-125 md:scale-150 ml-4 origin-centers pr-2 pt-2">
            <StackIcon iconTitle={iconTitle!} />
          </div>
          <h3 className="text-xl md:text-2xl font-medium text-left text-gray-900  hover:text-active dark:hover:text-active dark:text-gray-100">
            {title}
          </h3>
          <p className="text-gray-700 dark:text-gray-400 pt-2  md:text-lg">
            {description}
          </p>
        </a>
      </Link>
    </>
  );
}
