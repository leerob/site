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
      <a className="w-full">
        <div className="w-full mb-8">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
              {title}
            </h4>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{excerpt}</p>
          <Tags tags={tags} />
        </div>
      </a>
    </Link>
  );
}
