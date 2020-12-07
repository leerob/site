import Link from 'next/link';
import { parseISO, format } from 'date-fns';

export default function NewsletterLink({ slug, publishedAt }) {
  return (
    <li className="mb-2 ml-2">
      <Link href={`/newsletter/${slug}`}>
        <a className="font-medium text-gray-800 dark:text-gray-300 hover:underline">
          {format(parseISO(publishedAt), 'MMMM dd, yyyy')}
        </a>
      </Link>
    </li>
  );
}
