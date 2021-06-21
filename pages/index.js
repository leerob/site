import Link from 'next/link';

import Timeline from '../components/Timeline';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hello, Friend!
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I like to build things, both in computer code and in real life. Here, you can check out some of my past projects and ideas.
          –&nbsp;
          <Link href="/guestbook">
            <a>sign my guestbook</a>
          </Link>
          {" while you're here or "}
          <Link href="/about">
            <a>learn more about me.</a>
          </Link>
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Featured Stories
        </h3>
        <BlogPost
          title="Homemade Force Sensor"
          summary="Learn about the high-strength, wireless force sensor I fabricated and programmed."
          slug="force-sensor"
        />
        <Timeline />
      </div>
    </Container>
  );
}
