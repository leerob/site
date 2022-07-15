import { useMemo } from 'react';

import { STACKS } from '@/lib/simple-icons';

import ExternalLink from '@/components/ExternalLink';

export default function Skills() {
  const memoizedStacks = useMemo(() => STACKS, []);
  // TODO: implement 'featured' stacks
  return (
    <div className="grid overflow-hidden grid-cols-10 grid-rows-2 gap-2 justify-center">
      {memoizedStacks.map(({ Icon, url }) => (
        <div key={url}>
          <ExternalLink href={url}>{Icon}</ExternalLink>
        </div>
      ))}
    </div>
  );
}
