import React from 'react';
import Typed from 'typed.js';
import Emoji from '@/components/Emoji';

export default function TypedBios() {
  const el = React.useRef(null);
  const typed = React.useRef<Typed | null>(null);

  React.useEffect(() => {
    const options = {
      stringsElement: '#typewriter',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000
      // shuffle: true,
    };
    typed.current = new Typed(el.current!, options);
    return () => typed.current!.destroy();
  }, []);

  return (
    <div>
      <ul id="#typewriter" className="hidden">
        <li>
          I'm aliased as <b className="font-medium">Dzmitry</b> at work.
        </li>
        <li>I'm a software engineer, mostly focused on React ecosystem and serverless architecture.</li>
        <li>
          I live in <b className="font-medium">Tbilisi, Georgia</b>.
        </li>
        {/*Omit my country of origin */}
        <li>
          My first programming language I learned was{' '}
          <b className="font-medium">Pascal</b>.
        </li>
        <li>I love web development.</li>
        <li>I'm focusing on building eCommerce softwares.</li>
        <li>I work mostly with React/Node and Typescript.</li>
        <li>I'm Tu Le's husband.</li>
        <li>
          I'm a cat person <Emoji name="cat" />.
        </li>
        {/*Constantly learning, take please from good code and best practicies */}
        {/*Nomadizm, contetporary art, music */}
        {/*Yoga, cycling */}
        <li>
          I'm a sport-guy. I love
          <span className="ml-1">
            <Emoji name="soccer-ball" />,
            <Emoji name="man-swimming" />,
            <Emoji name="ping-pong" />,
            <Emoji name="volleyball" />
          </span>
          .
        </li>
      </ul>
      <span ref={el} className="text-gray-700 dark:text-gray-200" />
    </div>
  );
}
