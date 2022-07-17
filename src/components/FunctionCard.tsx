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
          className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
          {...rest}
        >
          <StackIcon iconTitle={iconTitle!} size="lg" className="py-4" />
          <h3 className="text-lg font-bold text-left mt-2 text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <p className="mt-1 text-gray-700 dark:text-gray-400">{description}</p>
        </a>
      </Link>
    </>
  );
}
