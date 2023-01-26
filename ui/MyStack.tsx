'use client';

import { useMemo } from 'react';
import { IconContext } from 'react-icons';
import StackIcon, { STACKS } from 'ui/StackIcon';

export default function MyStack() {
  const memoizedStacks = useMemo(() => STACKS.filter((el) => el.featured), []);
  return (
    <div className="grid grid-cols-6 md:grid-cols-8 items-center place-content-between max-w-2xl gap-x-12 gap-y-6 mx-auto w-full">
      <IconContext.Provider
        value={{
          className:
            'w-7 h-7 md:w-8 md:h-8  fill-gray-700  dark:fill-gray-300  hover:fill-gray-800 dark:hover:fill-gray-200'
        }}
      >
        {memoizedStacks.map((el, index) => (
          <StackIcon key={index} iconTitle={el.iconTitle} isLink={true} />
        ))}
      </IconContext.Provider>
    </div>
  );
}
