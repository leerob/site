'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  // function debounce(fn, delay) {
  //   let timeoutId: NodeJS.Timeout;
  //   return (...args) => {
  //     clearTimeout(timeoutId);
  //     timeoutId = setTimeout(() => fn(...args), delay);
  //   };
  // }
  const updateQueryString = (value: string) => {
    // TODO: check value length
    // TODO: search only if > 2 letters
    // TODO: debounce
    if (value.length === 0) {
      router.push(pathname);
    }
    const params = new URLSearchParams(searchParams);
    params.set('title', value);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="relative w-full mt-4 mb-2">
      <input
        aria-label="Search posts by title"
        type="text"
        onChange={(e) => updateQueryString(e.target.value)}
        placeholder="Search articles by title"
        className="block w-full px-4 py-2 border rounded-md border-gray-700  bg-gray-800 text-gray-100 focus:border-active/80 focus-visible:ring-1 focus:ring-active/75 focus:outline-none md:text-lg"
      />
      <svg
        className="absolute w-5 h-5 right-3 top-3 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}
