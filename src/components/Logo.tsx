import Svirins from '@/assets/svirins-logo.svg';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="w-16 h-16">
      <Svirins />
    </Link>
  );
}
