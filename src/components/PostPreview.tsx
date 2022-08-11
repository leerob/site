import Link from 'next/link';

import { Tags } from '@/components/Tags';
import { IPost } from '@/typings';

export default function PostPreview({
  slug,
  title,
  excerpt,
  tags
}: Partial<IPost>) {
  return (
    <Link href={`/blog/${slug}`}>
      <a className=" w-full  duration-150 ease-in-out py-4">
        <div className="w-full">
          <Tags tags={tags} />
          <h3 className="text-xl md:text-2xl font-medium text-left text-gray-900  hover:text-active dark:hover:text-active dark:text-gray-100">
            {title}
          </h3>
          <p className="text-gray-700 dark:text-gray-400 md:text-lg">
            {excerpt}
          </p>
        </div>
      </a>
    </Link>
  );
}
