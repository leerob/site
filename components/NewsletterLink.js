import Link from 'next/link';
import { parseISO, format } from 'date-fns';

export default function NewsletterLink({ slug, publishedAt }) {
  return (
    <li>
      <Link href={`/newsletter/${slug}`}>
        <a>{format(parseISO(publishedAt), 'MMMM dd, yyyy')}</a>
      </Link>
    </li>
  );
}
