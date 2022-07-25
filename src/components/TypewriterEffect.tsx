import { TYPED_STRINGS } from '@/config';
import { useRef, useEffect } from 'react';
import Typed from 'typed.js';

const TypewriterEffect = () => {
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
    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el} className="text-gray-700 dark:text-gray-400 mb-4" />;
};

export default TypewriterEffect;
