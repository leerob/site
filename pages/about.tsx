import Container from 'components/Container';
import Link from 'next/link';

export default function About() {
  return (
    <Container title="About – Satvik Shukla">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              Twitter: <a href="https://twitter.com/satvik_sh">@satvik_sh</a>
            </li>
            <li>
              GitHub: <a href="https://github.com/satvik-s">@satvik-s</a>
            </li>
            <li>
              Website:{' '}
              <Link href="https://doad.vercel.app">
                <a>https://doad.vercel.app</a>
              </Link>
            </li>
            <li>
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/satvik-shukla/">
                https://www.linkedin.com/in/satvik-shukla
              </a>
            </li>
          </ul>
          <h2>Bio</h2>
          <p>Satvik Shukla, Developer</p>
          <h3>Long, 1st Person</h3>
          <p>
            Hi, I'm Satvik. I am a developer at{' '}
            <a
              href="https://wbd.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Warner Bros. Discovery
            </a>
            , where I focus on developing purchase flows for HBO Max. I am
            passionate about open-source and dev ops too and try to spend time
            learning about those spaces. I also create content on YouTube where
            I walk through re-creating existing famous libraries.
          </p>
          <h3>Short, 1st Person</h3>
          <p>
            Hi, I'm Satvik. I am a developer at{' '}
            <a
              href="https://wbd.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Warner Bros. Discovery
            </a>
            , where I focus on developing purchase flows for HBO Max.
          </p>
          <h3>Education</h3>
          <p>
            Graduated from University of Washington.
            <br /> Cum Laude. Class of 2020.
          </p>
        </div>
      </div>
    </Container>
  );
}
