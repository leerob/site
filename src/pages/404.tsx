import Link from 'next/link';

import Container from '@/components/Container';

export default function NotFound() {
  return (
    <Container title="404 – Dzmitry Svirin">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold capsize text-3xl md:text-5xl tracking-tight mb-4 capsize text-gray-900 dark:text-gray-100">
          451 – Unavailable For Extraterrestrial Reasons
        </h1>
        <p className="text-gray-700 dark:text-gray-400 mb-8 md:text-lg">
          It seems you&apos;ve found something that used to exist, or you
          spelled something wrong. I&apos;m guessing you spelled something
          wrong. Can you check that URL?
        </p>
        <Link href="/">
          <a className=" text-gray-800 dark:text-gray-300  font-medium  link-underline link-underline-gradient">
            Return Home
          </a>
        </Link>
      </div>
    </Container>
  );
}
