import Link from 'next/link';
import { getIcon } from '@/lib/simple-icons';
import { urlForImage } from '@/lib/sanity-client';
import { ISnippet } from '@/typings';
export default function FunctionCard({
  title,
  description,
  slug,
  icon,
  ...rest
}: Partial<ISnippet>) {
  getIcon(icon!);
  return (
    <Link href={`/snippets/${slug}`}>
      <a
        className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
        {...rest}
      >
        <h3 className="text-lg font-bold text-left mt-2 text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="mt-1 text-gray-700 dark:text-gray-400">{description}</p>
      </a>
    </Link>
  );
}
