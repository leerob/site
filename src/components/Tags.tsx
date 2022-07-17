import Link from 'next/link';

import { ITag } from '@/typings';

export function Tags({ tags }: { tags?: ITag[] }) {
  return (
    <div className="flex flex-wrap w-full">
      {tags &&
        tags.map((tag) => (
          <Link href={`/blog/tag/${tag.slug}`} key={tag.slug}>
            <a className="mr-2 text-sm font-bold delay-100 text-gray-800 hover:text-pink-400  dark:text-gray-100 dark:hover:text-emerald-400 transition-all lowercase">{`#${tag.title}`}</a>
          </Link>
        ))}
    </div>
  );
}
