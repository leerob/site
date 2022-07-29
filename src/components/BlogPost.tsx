import Link from 'next/link';
import { Tags } from '@/components/Tags';
import { ITag } from '@/typings';

export default function BlogPost({
  slug,
  title,
  excerpt,
  tags
}: {
  slug: string;
  title: string;
  excerpt: string;
  tags?: ITag[];
}) {
  return (
    <Link href={`/blog/${slug}`}>
      <a className=" w-full  duration-150 ease-in-out py-4">
        <div className="w-full">
          <Tags tags={tags} />
          <h3 className="text-lg font-semibold text-left text-gray-900 dark:hover:text-signal-dark hover:text-signal dark:text-gray-100">
            {title}
          </h3>
          <p className="text-gray-700 dark:text-gray-400">{excerpt}</p>
        </div>
      </a>
    </Link>
  );
}
