import Link from 'next/link';

import { ITag } from '@/app/lib/sanity';

interface ITags {
  tags?: ITag[];
}

export function Tags({ tags }: ITags) {
  return (
    <div className="flex flex-wrap w-full md:pb-2">
      {tags &&
        tags.map((tag) => (
          <Link
            href={`/blog/tag/${tag.slug}`}
            key={tag.slug}
            className="mr-2 text-sm md:text-base font-medium   hover:text-active text-gray-400  ease-in-out transition-all duration-150 lowercase"
          >
            {`#${tag.title}`}
          </Link>
        ))}
    </div>
  );
}
