import { useMemo } from 'react';

import {
  SiAlgolia,
  SiAmazonaws,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGraphql,
  SiHeroku,
  SiJest,
  SiLinux,
  SiMapbox,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiPnpm,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiVercel
} from 'react-icons/si';
import ExternalLink from '@/components/ExternalLink';

// import Sanity from '/sanity.svg';
// import Nextjs from '/nextjs.svg';
// import Typescript from '/yypescript.svg';

export default function ExtraSkills() {
  const stacks = useMemo(
    () => [
      {
        Icon: SiAlgolia,
        url: 'https://golang.org/'
      },
      {
        Icon: SiAmazonaws,
        url: 'https://golang.org/'
      },
      {
        Icon: SiDocker,
        url: 'https://kubernetes.io/'
      },
      {
        Icon: SiExpress,
        url: 'https://www.typescriptlang.org/'
      },
      {
        Icon: SiFigma,
        url: 'https://graphql.org/'
      },
      {
        Icon: SiFirebase,
        url: 'https://aws.amazon.com/'
      },
      {
        Icon: SiGraphql,
        url: 'https://nextjs.org/'
      },
      {
        Icon: SiHeroku,
        url: 'https://elixir-lang.org/'
      },
      {
        Icon: SiJest,
        url: 'https://cloud.google.com/'
      },
      {
        Icon: SiLinux,
        url: 'https://www.terraform.io/'
      },
      {
        Icon: SiMapbox,
        url: 'https://www.postgresql.org/'
      },
      {
        Icon: SiMysql,
        url: 'https://www.postgresql.org/'
      },
      {
        Icon: SiPostgresql,
        url: 'https://www.python.org/'
      },
      {
        Icon: SiPrisma,
        url: 'https://www.python.org/'
      },
      {
        Icon: SiPnpm,
        url: 'https://www.python.org/'
      },
      {
        Icon: SiReact,
        url: 'https://www.python.org/'
      },
      {
        Icon: SiSupabase,
        url: 'https://www.python.org/'
      },
      {
        Icon: SiTailwindcss,
        url: 'https://www.python.org/'
      },
      {
        Icon: SiVercel,
        url: 'https://www.python.org/'
      }
    ],
    []
  );

  return (
    <div className="grid-cols-8 gap-4 justify-center">
      {stacks.map(({ Icon, url }) => (
        <ExternalLink href={url} key={url}>
          <Icon className="w-8 h-8" />
        </ExternalLink>
      ))}
    </div>
  );
}
