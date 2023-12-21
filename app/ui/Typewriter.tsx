'use client';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

import { TYPED_STRINGS } from '@/app/lib/constants';

export function Typewriter() {
  const el = useRef<HTMLSpanElement>(null!);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: TYPED_STRINGS,
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <span
      ref={el}
      className="text-gray-200 md:text-lg italic font-medium min-h-8"
    />
  );
}
