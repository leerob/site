import { IStackIcon } from '@/typings';
import cn from 'classnames';
import {
  SiAlgolia,
  SiAmazonaws,
  SiChakraui,
  SiCss3,
  SiDebian,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiGraphql,
  SiHeroku,
  SiJest,
  SiLinux,
  SiMapbox,
  SiMysql,
  SiNodedotjs,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiPnpm,
  SiReact,
  SiSahibinden,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiTwitter,
  SiGmail,
  SiGithub
} from 'react-icons/si';

export const SOCIALS = [
  {
    Icon: (
      <SiTwitter className="w-4 h-4 fill-gray-800  dark:fill-gray-200 hover:fill-signal  dark:hover:fill-signal-dark  transform  duration-150 ease-in-out  transition-all" />
    ),
    url: 'https://twitter.com/svirins',
    iconTitle: 'My Twitter'
  },
  {
    Icon: (
      <SiGithub className="w-4 h-4 fill-gray-800  dark:fill-gray-200 hover:fill-signal  dark:hover:fill-signal-dark  transform  duration-150 ease-in-out  transition-all" />
    ),
    url: 'https://github.com/svirins',
    iconTitle: 'My GitHub'
  },
  {
    Icon: (
      <SiGmail className="w-4 h-4 fill-gray-800  dark:fill-gray-200 hover:fill-signal  dark:hover:fill-signal-dark  transform  duration-150 ease-in-out  transition-all" />
    ),
    url: 'mailto:svirins@gmail.com',
    iconTitle: 'My Gmail'
  }
];

export const STACKS = [
  {
    Icon: <SiAlgolia className="w-9 h-9 fill-gray-800  dark:fill-gray-200" />,
    url: 'https://www.algolia.com/',
    iconTitle: 'Algolia',
    color: '#00BFB3',
    featured: true
  },
  {
    Icon: <SiAmazonaws className="w-9 h-9 fill-gray-800  dark:fill-gray-200" />,
    url: 'https://aws.amazon.com/',
    iconTitle: 'Amazon AWS',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: <SiChakraui className="w-9 h-9 fill-gray-800  dark:fill-gray-200" />,
    url: 'https://chakra-ui.com/',
    iconTitle: 'Chakra UI',
    color: '#00BFB3',
    featured: true
  },
  {
    Icon: <SiCss3 className="w-9 h-9 fill-gray-800  dark:fill-gray-200" />,
    url: 'https://golang.org/',
    iconTitle: 'CSS3',
    color: '#FFC107'
  },
  {
    Icon: <SiDebian className="w-9 h-9 fill-gray-800  dark:fill-gray-200" />,
    url: 'https://kubernetes.io/',
    iconTitle: 'Debian',
    color: '#FFC107'
  },

  {
    Icon: <SiDocker className="w-9 h-9 fill-gray-800  dark:fill-gray-200" />,
    url: 'https://kubernetes.io/',
    iconTitle: 'Docker',
    color: '#FFC107'
  },
  {
    Icon: <SiExpress className="w-9 h-9 fill-gray-800  dark:fill-gray-200" />,
    url: 'https://www.typescriptlang.org/',
    iconTitle: 'Express',
    color: '#FFC107'
  },
  {
    Icon: <SiFigma className="w-9 h-9 fill-gray-800  dark:fill-gray-200" />,
    url: 'https://graphql.org/',
    iconTitle: 'Figma',
    color: '#FFC107'
  },
  {
    Icon: <SiFirebase className="w-9 h-9 fill-gray-800  dark:fill-gray-200" />,
    url: 'https://firebase.google.com/',
    iconTitle: 'Firebase',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: <SiFramer className="w-9 h-9 fill-gray-800  dark:fill-gray-200" />,
    url: 'https://aws.amazon.com/',
    iconTitle: 'Framer',
    color: '#FFC107'
  },
  {
    Icon: <SiGraphql className="w-9 h-9 fill-gray-800  dark:fill-gray-200" />,
    url: 'https://graphql.org/',
    iconTitle: 'GraphQL',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: <SiHeroku className="w-9 h-9 fill-gray-800  dark:fill-gray-200" />,
    url: 'https://elixir-lang.org/',
    iconTitle: 'Heroku',
    color: '#FFC107'
  },
  {
    Icon: <SiJest className="w-9 h-9 fill-gray-800  dark:fill-gray-200" />,
    url: 'https://jestjs.io/',
    iconTitle: 'Jest',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: <SiLinux className="w-9 h-9 fill-gray-800  dark:fill-gray-200" />,
    url: 'https://www.linux.org/',
    iconTitle: 'Linux',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: <SiMapbox className="w-9 h-9 fill-gray-800  dark:fill-gray-200" />,
    url: 'https://www.postgresql.org/',
    iconTitle: 'Mapbox',
    color: '#FFC107'
  },
  {
    Icon: <SiMysql className="w-9 h-9 fill-gray-800  dark:fill-gray-200" />,
    url: 'https://www.mysql.com/',
    iconTitle: 'MySQL',
    color: '#FFC107'
  },
  {
    Icon: <SiNodedotjs className="w-9 h-9 fill-gray-800  dark:fill-gray-200" />,
    url: 'https://www.postgresql.org/',
    iconTitle: 'Node.js',
    color: '#FFC107'
  },
  {
    Icon: <SiNextdotjs className="w-9 h-9 fill-gray-800  dark:fill-gray-200" />,
    url: 'https://www.nextjs.org/',
    iconTitle: 'Nextjs',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: (
      <SiPostgresql className="w-9 h-9 fill-gray-800  dark:fill-gray-200" />
    ),
    url: 'https://www.python.org/',
    iconTitle: 'PostgreSQL',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: <SiPrisma className="w-9 h-9 fill-gray-800  dark:fill-gray-200" />,
    url: 'https://www.prisma.io/',
    iconTitle: 'Prisma',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: <SiPnpm className="w-9 h-9 fill-gray-800  dark:fill-gray-200" />,
    url: 'https://www.python.org/',
    iconTitle: 'PnPM',
    color: '#FFC107'
  },
  {
    Icon: <SiReact className="w-9 h-9 fill-gray-800  dark:fill-gray-200" />,
    url: 'https://www.reactjs.org/',
    iconTitle: 'React',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: (
      <SiSahibinden className="w-9 h-9 fill-gray-800  dark:fill-gray-200" />
    ),
    url: 'https://www.sanity.io/',
    iconTitle: 'Sanity',
    color: '#FFC107',
    featured: true
  },

  {
    Icon: <SiStripe className="w-9 h-9 fill-gray-800  dark:fill-gray-200" />,
    url: 'https://www.stripe.com/',
    iconTitle: 'Stripe',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: <SiSupabase className="w-9 h-9 fill-gray-800  dark:fill-gray-200" />,
    url: 'https://www.supabase.com/',
    iconTitle: 'Supabase',
    color: '#FFC107',
    featured: false
  },
  {
    Icon: (
      <SiTailwindcss className="w-9 h-9 fill-gray-800  dark:fill-gray-200" />
    ),
    url: 'https://www.tailwindscss.com/',
    iconTitle: 'Tailwind CSS',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: (
      <SiTypescript className="w-9 h-9 fill-gray-800  dark:fill-gray-200" />
    ),
    featured: true,
    url: 'https://www.typescriptlang.org/',
    iconTitle: 'Typescript',
    color: '#FFC107'
  },
  {
    Icon: <SiVercel className="w-9 h-9 fill-gray-800  dark:fill-gray-200" />,
    url: 'https://vercel.com/',
    iconTitle: 'Vercel',
    color: '#FFC107',
    featured: true
  }
];

export default function StackIcon({ iconTitle, isLink = false }: IStackIcon) {
  const { Icon, url } =
    STACKS.find((stack) => stack.iconTitle === iconTitle) ?? STACKS[0];
  return isLink ? (
    <a
      className="duration-150 fill-gray-800  dark:fill-gray-200  transform  ease-in-out hover:translate-y-1"
      href={url}
    >
      {Icon}
    </a>
  ) : (
    Icon
  );
}

export function SanityIcon() {
  return (
    <div className="inline-flex px-4">
      <a
        href="https://www.sanity.io/"
        className="fill-red-500 dark:fill-red-500"
      >
        <svg
          viewBox="0 0 105 22"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
        >
          <title>Sanity</title>
          <path
            opacity="0.7"
            d="M78.1793 7.99261V21.0028H73.9031V10.2138L78.1793 7.99261Z"
            fill="fill-red-500"
          ></path>
          <path
            opacity="0.7"
            d="M20.9511 21.33L30.944 16.1051L29.7121 12.9141L23.1332 15.9821L20.9511 21.33Z"
            fill="fill-red-500"
          ></path>
          <path
            opacity="0.5"
            d="M73.9031 10.2027L84.7443 4.65477L82.9126 1.5571L73.9031 5.95997V10.2027Z"
            fill="fill-red-500"
          ></path>
          <path
            opacity="0.7"
            d="M43.3705 6.96233V21.0028H39.2927V1.00714L43.3705 6.96233Z"
            fill="fill-red-500"
          ></path>
          <path
            opacity="0.5"
            d="M27.1299 6.18617L20.9511 21.33L17.7731 18.5943L25.1353 1.00714L27.1299 6.18617Z"
            fill="fill-red-500"
          ></path>
          <path
            d="M25.1353 1.00714H29.3477L37.1386 21.0028H32.8269L25.1353 1.00714Z"
            fill="fill-red-500"
          ></path>
          <path
            d="M44.0012 1.00714L52.9824 14.6682V21.0028L39.2927 1.00714H44.0012Z"
            fill="fill-red-500"
          ></path>
          <path
            d="M64.9183 1.00714H60.6739V21.0063H64.9183V1.00714Z"
            fill="fill-red-500"
          ></path>
          <path
            d="M73.9031 4.65474H67.37V1.00714H82.5867L84.7443 4.65474H78.1793H73.9031Z"
            fill="fill-red-500"
          ></path>
          <path
            opacity="0.5"
            d="M97.2754 13.4153V21.0028H93.0629V13.4153"
            fill="fill-red-500"
          ></path>
          <path
            d="M93.0629 13.4152L100.191 1.00714H104.666L97.2754 13.4152H93.0629Z"
            fill="fill-red-500"
          ></path>
          <path
            opacity="0.7"
            d="M93.063 13.4152L85.7363 1.00714H90.3456L95.3092 9.51008L93.063 13.4152Z"
            fill="fill-red-500"
          ></path>
          <path
            d="M1.96126 3.31479C1.96126 6.09921 3.71145 7.75595 7.21536 8.62956L10.9283 9.47533C14.2444 10.2236 16.2639 12.0822 16.2639 15.1103C16.2897 16.4295 15.8531 17.7173 15.0274 18.7579C15.0274 15.7368 13.4367 14.1044 9.59972 13.1229L5.95409 12.3085C3.03475 11.6541 0.781478 10.1262 0.781478 6.83709C0.766123 5.56693 1.18116 4.32781 1.96126 3.31479"
            fill="fill-red-500"
          ></path>
          <path
            opacity="0.7"
            d="M52.9824 13.6415V1.00714H57.0602V21.0028H52.9824V13.6415Z"
            fill="fill-red-500"
          ></path>
          <path
            opacity="0.7"
            d="M12.7458 14.3689C14.3294 15.3643 15.0238 16.7565 15.0238 18.7544C13.713 20.4041 11.4101 21.33 8.70333 21.33C4.14718 21.33 0.958577 19.1268 0.25 15.2982H4.62547C5.18878 17.0559 6.68034 17.8703 8.67144 17.8703C11.1019 17.8703 12.7174 16.5964 12.7493 14.3619"
            fill="fill-red-500"
          ></path>
          <path
            opacity="0.7"
            d="M4.23567 7.44267C3.5125 7.02045 2.9192 6.41375 2.51873 5.68697C2.11827 4.96019 1.92558 4.14045 1.96113 3.31476C3.22594 1.67891 5.42608 0.679993 8.10804 0.679993C12.7492 0.679993 15.4347 3.08852 16.0972 6.47856H11.8883C11.4242 5.14203 10.2621 4.10136 8.14347 4.10136C5.87957 4.10136 4.33487 5.39611 4.24629 7.44267"
            fill="fill-red-500"
          ></path>
        </svg>
      </a>
    </div>
  );
}
