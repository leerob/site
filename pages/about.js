import Link from 'next/link';

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
    <Container title="About – Joao Garin">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Hey, I’m Joao. I'm a technical team lead at{' '}
            <a
              href="https://www.jobqio.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              jobiqo
            </a>{' '}
            , part time creator of&nbsp;
            <a
              href="https://www.haynetvet.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Haynet
            </a>
            , &nbsp;
            <a
              href="https://www.brunivisual.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Brunivisual
            </a>
            , &nbsp;
            <a
              href="https://aifontfinder.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              AI Font finder
            </a>
            &nbsp;and&nbsp;
            <a
              href="https://react2025.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              many themeforest themes.
            </a>
          </p>
          <p>
            I’ve spoken in some local meetups and some online conferences like
            DrupalCon Europe from topics like visual regression testing,
            components architectures and javascript (React and Angular).
          </p>
          <p>
            I grew up in in Cascais, close to Lisbon in Portugal. I am
            passionate about coding and javascript, surfing, computer games and
            food.
          </p>
        </div>

        <h2 className="font-bold text-3xl tracking-tight mb-4 text-black dark:text-white">
          Conference Talks
        </h2>

        <Talk
          title="Decoupled Drupal in Jobiqo: a retrospective"
          link="https://www.youtube.com/watch?v=Wwa3STW1tBU"
        >
          In this session I presented learnings from the last 5 years building
          our product at jobiqo using decoupled Drupal. I highlight the
          learnings of transitioning from a monolith to a decoupled
          architecture, the challenges we faced and how we overcame them. I also
          talk about the benefits of decoupling and how it allowed us to scale
          our product and our team.
        </Talk>
        <Talk
          title="Visual regression testing"
          link="https://events.drupal.org/europe2020/sessions/visual-regression-testing"
        >
          In this session I presented what visual regression testing is,
          including information on how it can be adapted to your use case and
          how it can be included in your day to day workflow as a developer and
          as a team. I have shown tools in action and how they can improve the
          quality of your work in terms of design, accessibility and usability
          amongst other benefits.
        </Talk>
        <Talk
          title="Angular Universal"
          link="https://www.meetup.com/Angular-Portugal/events/239795446/"
        >
          In this talk I covered what is Universal rendering, what that means
          for the web today, the benefits / challenges and how that can be
          accomplished with Angular. With Angular 4.0 what was previously a
          community-only effort (Angular Universal) was moved to Angular core
          making the API cleaner, easier to use, and maintaining better
          compatibility with the rest of the framework. We discussed what the
          new API looks like and what are the best ways to start using it today.
          The talk will focus on version 4.x.
        </Talk>
      </div>
    </Container>
  );
}
