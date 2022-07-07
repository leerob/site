import { useMemo } from 'react';

import Nextjs from '@/assets/nextjs.svg';
import Typescript from '@/assets/typescript.svg';
import Sanity from '@/assets/sanity.svg';

import ExternalLink from '@/components/ExternalLink';

export default function TopSkills() {
  const stacks = useMemo(
    () => [
      {
        Icon: Nextjs,
        url: 'https://golang.org/'
      },
      {
        Icon: Typescript,
        url: 'https://golang.org/'
      },
      {
        Icon: Sanity,
        url: 'https://kubernetes.io/'
      }
    ],
    []
  );

  return (
    <div className="grid-cols-8 gap-4 justify-center">
      {stacks.map(({ Icon, url }) => (
        <ExternalLink href={url} key={url}>
          <Icon />
        </ExternalLink>
      ))}
    </div>
  );
}
