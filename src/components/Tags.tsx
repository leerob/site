import Link from 'next/link';

import { ITag } from '@/typings';

export function Tags({ tags }: { tags?: ITag[] }) {
  return (
    <div className="flex flex-wrap w-full">
      {tags &&
        tags.map((tag) => (
          <Link href={`/blog/tag/${tag.slug}`} key={tag.slug}>
            <a className="mr-2 text-sm font-semibold mb-2 text-gray-700 hover:text-signal  dark:text-gray-200 dark:hover:text-signal transition-all delay-200 lowercase">{`#${tag.title}`}</a>
          </Link>
        ))}
    </div>
  );
}
