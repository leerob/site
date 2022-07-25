import Link from 'next/link';
import StackIcon from '@/components/StackIcon';
import { ISnippet } from '@/typings';

export default function FunctionCard({
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
          className="p-4 w-full border border-gray-400 dark:border-gray-700 rounded  transition-all dark:hover:border-signal   hover:border-signal duration-150 ease-in-out [&>h3]:dark:hover:text-signal  [&>h3]:hover:text-signal"
          {...rest}
        >
          <div className="pb-4">
            <StackIcon iconTitle={iconTitle!} />
          </div>
          <h3 className="text-lg font-semibold text-left mt-2 text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <p className="mt-1 text-gray-700 dark:text-gray-400">{description}</p>
        </a>
      </Link>
    </>
  );
}
