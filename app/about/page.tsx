import {
  GitHubIcon,
  YoutubeIcon,
  ArrowIcon,
  TwitterIcon,
} from 'components/icons';

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Hey, I'm Lee. Most folks know me as <b>leerob</b> online.
      </p>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          I'm currently the VP of Developer Experience at Vercel, where I lead
          our Developer Relations and Documentation teams. I focus on educating
          and growing the Vercel and Next.js communities. I joined Vercel back
          in 2020 as employee #30.
        </p>
        <p>
          I'm passionate about many creative pursuits, including music,
          photography, videography, and of course, coding. This combination of
          interests is what ultimately led me to a career in Developer
          Relations.
        </p>
        <p>
          I love building for the web. From something as simple as a single HTML
          file – all the way to large, Next.js applications. The web is
          incredible. Anyone can become a developer, writer, or creator – and no
          one has to ask for permission. You can just... build.
        </p>
        <p className="mb-8">
          Outside of Vercel, I angel invest in developer tools companies and
          advise early-stage startups. I also do Developer Relations consulting
          work, helping companies take their DevRel function from 0 to 1, or
          provide guidance on growing communities, content creation, and
          developer marketing.
        </p>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://twitter.com/leeerob"
          className="flex my-4 w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between max-w-md"
        >
          <div className="flex items-center">
            <TwitterIcon />
            <div className="ml-3">Twitter</div>
          </div>
          <ArrowIcon />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/leerob"
          className="flex my-4 w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between max-w-md"
        >
          <div className="flex items-center">
            <GitHubIcon />
            <div className="ml-3">GitHub</div>
          </div>
          <ArrowIcon />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.youtube.com/@leerob"
          className="flex my-4 w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between max-w-md"
        >
          <div className="flex items-center">
            <YoutubeIcon />
            <div className="ml-3">YouTube</div>
          </div>
          <ArrowIcon />
        </a>
      </div>
    </section>
  );
}
