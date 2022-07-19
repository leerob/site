import { IStackIcon } from '@/typings';

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
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel
} from 'react-icons/si';
import ExternalLink from '@/components/ExternalLink';

export const STACKS = [
  {
    Icon: (
      <SiAlgolia className="w-10 h-10 fill-current text-gray-700 dark:text-gray-200" />
    ),
    url: 'https://www.algolia.com/',
    iconTitle: 'Algolia',
    color: '#00BFB3'
  },
  {
    Icon: (
      <SiAmazonaws className="w-10 h-10 fill-current text-gray-700 dark:text-gray-200" />
    ),
    url: 'https://aws.amazon.com/',
    iconTitle: 'Amazon AWS',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: (
      <SiChakraui className="w-10 h-10 fill-current text-gray-700 dark:text-gray-200" />
    ),
    url: 'https://chakra-ui.com/',
    iconTitle: 'Chakra UI',
    color: '#00BFB3',
    featured: true
  },
  {
    Icon: (
      <SiCss3 className="w-10 h-10 fill-current text-gray-700 dark:text-gray-200" />
    ),
    url: 'https://golang.org/',
    iconTitle: 'CSS3',
    color: '#FFC107'
  },
  {
    Icon: (
      <SiDebian className="w-10 h-10 fill-current text-gray-700 dark:text-gray-200" />
    ),
    url: 'https://kubernetes.io/',
    iconTitle: 'Debian',
    color: '#FFC107'
  },

  {
    Icon: (
      <SiDocker className="w-10 h-10 fill-current text-gray-700 dark:text-gray-200" />
    ),
    url: 'https://kubernetes.io/',
    iconTitle: 'Docker',
    color: '#FFC107'
  },
  {
    Icon: (
      <SiExpress className="w-10 h-10 fill-current text-gray-700 dark:text-gray-200" />
    ),
    url: 'https://www.typescriptlang.org/',
    iconTitle: 'Express',
    color: '#FFC107'
  },
  {
    Icon: (
      <SiFigma className="w-10 h-10 fill-current text-gray-700 dark:text-gray-200" />
    ),
    url: 'https://graphql.org/',
    iconTitle: 'Figma',
    color: '#FFC107'
  },
  {
    Icon: (
      <SiFirebase className="w-10 h-10 fill-current text-gray-700 dark:text-gray-200" />
    ),
    url: 'https://firebase.google.com/',
    iconTitle: 'Firebase',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: (
      <SiFramer className="w-10 h-10 fill-current text-gray-700 dark:text-gray-200" />
    ),
    url: 'https://aws.amazon.com/',
    iconTitle: 'Framer',
    color: '#FFC107'
  },
  {
    Icon: (
      <SiGraphql className="w-10 h-10 fill-current text-gray-700 dark:text-gray-200" />
    ),
    url: 'https://graphql.org/',
    iconTitle: 'GraphQL',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: (
      <SiHeroku className="w-10 h-10 fill-current text-gray-700 dark:text-gray-200" />
    ),
    url: 'https://elixir-lang.org/',
    iconTitle: 'Heroku',
    color: '#FFC107'
  },
  {
    Icon: (
      <SiJest className="w-10 h-10 fill-current text-gray-700 dark:text-gray-200" />
    ),
    url: 'https://jestjs.io/',
    iconTitle: 'Jest',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: (
      <SiLinux className="w-10 h-10 fill-current text-gray-700 dark:text-gray-200" />
    ),
    url: 'https://www.linux.org/',
    iconTitle: 'Linux',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: (
      <SiMapbox className="w-10 h-10 fill-current text-gray-700 dark:text-gray-200" />
    ),
    url: 'https://www.postgresql.org/',
    iconTitle: 'Mapbox',
    color: '#FFC107'
  },
  {
    Icon: (
      <SiMysql className="w-10 h-10 fill-current text-gray-700 dark:text-gray-200" />
    ),
    url: 'https://www.mysql.com/',
    iconTitle: 'MySQL',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: (
      <SiNodedotjs className="w-10 h-10 fill-current text-gray-700 dark:text-gray-200" />
    ),
    url: 'https://www.postgresql.org/',
    iconTitle: 'Node.js',
    color: '#FFC107'
  },
  {
    Icon: (
      <SiNextdotjs className="w-10 h-10 fill-current text-gray-700 dark:text-gray-200" />
    ),
    url: 'https://www.nextjs.org/',
    iconTitle: 'Next.js',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: (
      <SiPostgresql className="w-10 h-10 fill-current text-gray-700 dark:text-gray-200" />
    ),
    url: 'https://www.python.org/',
    iconTitle: 'PostgreSQL',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: (
      <SiPrisma className="w-10 h-10 fill-current text-gray-700 dark:text-gray-200" />
    ),
    url: 'https://www.prisma.io/',
    iconTitle: 'Prisma',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: (
      <SiPnpm className="w-10 h-10 fill-current text-gray-700 dark:text-gray-200" />
    ),
    url: 'https://www.python.org/',
    iconTitle: 'PnPM',
    color: '#FFC107'
  },
  {
    Icon: (
      <SiReact className="w-10 h-10 fill-current text-gray-700 dark:text-gray-200" />
    ),
    url: 'https://www.reactjs.org/',
    iconTitle: 'React',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: (
      <SiStripe className="w-10 h-10 fill-current text-gray-700 dark:text-gray-200" />
    ),
    url: 'https://www.stripe.com/',
    iconTitle: 'Stripe',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: (
      <SiSupabase className="w-10 h-10 fill-current text-gray-700 dark:text-gray-200" />
    ),
    url: 'https://www.supabase.com/',
    iconTitle: 'Supabase',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: (
      <SiTailwindcss className="w-10 h-10 fill-current text-gray-700 dark:text-gray-200" />
    ),
    url: 'https://www.tailwindscss.com/',
    iconTitle: 'Tailwind CSS',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: (
      <SiTypescript className="w-10 h-10 fill-current text-gray-700 dark:text-gray-200" />
    ),
    featured: true,
    url: 'https://www.typescriptlang.org/',
    iconTitle: 'Typescript',
    color: '#FFC107'
  },
  {
    Icon: (
      <SiVercel className="w-10 h-10 fill-current text-gray-700 dark:text-gray-200" />
    ),
    url: 'https://vercel.com/',
    iconTitle: 'Vercel',
    color: '#FFC107',
    featured: true
  }
];

export default function StackIcon({ iconTitle, isLink = false }: IStackIcon) {
  const { Icon, url, color } =
    STACKS.find((stack) => stack.iconTitle === iconTitle) ?? STACKS[0];
  return isLink ? (
    <ExternalLink color={color} href={url}>
      {Icon}
    </ExternalLink>
  ) : (
    Icon
  );
}
