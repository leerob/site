import Link from 'next/link';

import { ITag } from '@/typings/types';

export function Tags({ tags }: { tags?: ITag[] }) {
  return (
    <div className="flex flex-wrap w-full">
      {tags &&
        tags.map((tag) => (
          <Link href={`/blog/tag/${tag.slug}`} key={tag.slug}>
            <a className="mr-2 text-sm lowercase">{`#${tag.title}`}</a>
          </Link>
        ))}
    </div>
  );
}
