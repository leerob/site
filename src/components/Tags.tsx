import Link from 'next/link';

import { ITag } from '@/typings/types';

export function Tags({ tags }: { tags?: ITag[] }) {
  return (
    <div className="flex flex-wrap w-full">
      {tags &&
        tags.map((tag) => (
          <Link href={`/blog/tag/${tag.slug}`} key={tag.slug}>
            <a className="mr-2 text-sm font-medium delay-100 text-pink-700 hover:text-pink-400   dark:text-green-400 dark:hover:text-green-300 transition-all lowercase">{`#${tag.title}`}</a>
          </Link>
        ))}
    </div>
  );
}
