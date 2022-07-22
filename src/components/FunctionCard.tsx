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
          className="shadow-lg ring-pink-500/50  dark:ring-pink-800/80 p-4 w-full"
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
