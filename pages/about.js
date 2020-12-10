import Link from 'next/link';
import { NextSeo } from 'next-seo';

import Container from '@/components/Container';

const Talk = ({ title, link, children }) => (
  <>
    <h3 className="font-medium mb-2 text-lg">
      <a
        className="flex items-center text-gray-900 dark:text-gray-100"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        {title}
        <div>
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </a>
    </h3>
    <p className="text-gray-600 dark:text-gray-400 mb-8">{children}</p>
  </>
);

export default function About() {
  return (
    <Container>
      <NextSeo
        title="About Me – Lee Robinson"
        canonical="https://leerob.io/about"
        openGraph={{
          url: 'https://leerob.io/about',
          title: 'About Me – Lee Robinson'
        }}
      />
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Hey, I’m Lee. I'm a developer, writer, and the creator of&nbsp;
            <a
              href="https://masteringnextjs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mastering Next.js
            </a>
            &nbsp;and&nbsp;
            <a
              href="https://react2025.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              React 2025.
            </a>
            &nbsp;I work at ▲Vercel as a Solutions Architect.
          </p>
          <p>
            I’ve spoken across the country at conferences and meet-ups about
            front-end development, design, and recruiting. I write about
            development, tech careers, and my personal life on&nbsp;
            <Link href="/newsletter">
              <a>my newsletter.</a>
            </Link>
          </p>
          <p>
            I grew up in small-town Iowa and went to school at Iowa State,
            graduating with a degree in Computer Engineering. I spend my free
            time playing music, creating videos, and enjoying time with friends
            and family in Des Moines, IA.
          </p>
        </div>
        <h2 className="font-bold text-3xl tracking-tight mb-4 text-black dark:text-white">
          Conference Talks
        </h2>
        <Talk
          title="Data Fetching with Next.js"
          link="https://www.youtube.com/watch?v=Sz7SImkdIpo&feature=youtu.be&t=6063"
        >
          Next.js is a hybrid React framework allowing you to choose your data
          fetching strategy on a per-page basis. In this talk, you’ll learn more
          about CSR (Client-Side Rendering), SSR (Server-Side Rendering), SSG
          (Static-Site Generation), ISR (Incremental Static Regeneration), and
          when to use each one. I’ll also give a quick introduction to Next.js
          and share some of the main features of the framework.
        </Talk>
        <Talk
          title="Building Static Sites with Prisma and Next.js"
          link="https://youtu.be/z3rmZbOEBCM?t=273"
        >
          During this workshop, you'll learn how to integrate Prisma with
          Next.js and build a statically-generated site that displays a list of
          your favorite songs. We'll use Chakra UI for styling and deploy our
          site with Vercel.
        </Talk>
        <Talk
          title="Building Component Libraries with a Monorepo"
          link="/building-component-libraries-with-a-monorepo.pdf"
        >
          Learn why your organization needs a component library and discover the
          best practices for building, scaling, and adopting it across all
          platforms. We'll be using industry-standard technology (React,
          JavaScript, Storybook) alongside cutting-edge solutions (CSS-in-JS,
          Monorepo).
        </Talk>
        <Talk
          title="Recruiting Engineers (From An Engineer's Perspective)"
          link="/recruiting-engineers-talent42-lee-robinson.pdf"
        >
          Hiring talent is becoming increasingly difficult with low unemployment
          rates and the tech industry booming. What you can do to stick out?
          Learn from an engineer who's been involved on both sides - both as a
          candidate and with hiring - on what candidates really want out of a
          position.
        </Talk>
        <iframe
          height="280"
          src="https://www.google.com/maps/d/embed?mid=1QOGi-u8d4vwoQ4vC4zQjKxrSfsDIQdOK&hl=en"
          title="Lee's Travel Map"
          width="100%"
        />
      </div>
    </Container>
  );
}
