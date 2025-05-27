'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type Heading = {
  id: string;
  text: string;
  level: number;
};

function generateId(text: string): string {
  return text
    .toLowerCase()
    // Remove numbers and dots from the start
    .replace(/^[\d.]+\.?\s*/, '')
    // Replace special characters and spaces with hyphens
    .replace(/[^a-z0-9]+/g, '-')
    // Remove leading and trailing hyphens
    .replace(/^-+|-+$/g, '');
}

export function Sidebar() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    // Extract headings from the rendered content
    const content = document.querySelector('main');
    if (!content) return;

    const headingElements = content.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const extractedHeadings: Heading[] = Array.from(headingElements).map((heading) => {
      const text = heading.textContent || '';
      const id = heading.id || generateId(text);
      
      // Set the ID on the heading element if it doesn't have one
      if (!heading.id) {
        heading.id = id;
      }

      return {
        id,
        text,
        level: parseInt(heading.tagName[1]),
      };
    });

    setHeadings(extractedHeadings);
  }, [pathname]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-64 fixed right-0 top-0 h-screen p-6 overflow-y-auto">
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ marginLeft: `${(heading.level - 1) * 1}rem` }}
          >
            <a
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
              className={`block py-1 text-sm hover:text-blue-500 transition-colors cursor-pointer ${
                pathname === `#${heading.id}`
                  ? 'text-blue-500 font-medium'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
} 