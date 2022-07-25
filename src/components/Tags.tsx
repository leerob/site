import Link from 'next/link';

import { ITag } from '@/typings';

export function Tags({ tags }: { tags?: ITag[] }) {
  return (
    <div className="flex flex-wrap w-full">
      {tags &&
        tags.map((tag) => (
          <Link href={`/blog/tag/${tag.slug}`} key={tag.slug}>
            <a className="mr-2 text-sm font-medium mb-2 text-gray-700 hover:text-signal  dark:text-gray-400 dark:hover:text-signal ease-in-out transition-all duration-150 lowercase">{`#${tag.title}`}</a>
          </Link>
        ))}
    </div>
  );
}
