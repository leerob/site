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
          className="shadow-lg shadow-pink-500/50  dark:shadow-pink-800/80 p-4 w-full"
          // className="border border-grey-200 hover:border-pink-400 dark:border-gray-800  hover:dark:border-emerald-400 rounded p-4 w-full bg-white dark:bg-gray-900 delay-200 transition-all"
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
