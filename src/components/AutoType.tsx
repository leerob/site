import React from 'react';
import Typed from 'typed.js';
import Emoji from '@/components/Emoji';

export default function TypedBios() {
  const el = React.useRef(null);
  const typed = React.useRef<Typed | null>(null);

  React.useEffect(() => {
    const options = {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000
      // shuffle: true,
    };
    typed.current = new Typed(el.current, options);
    return () => typed.current.destroy();
  }, []);

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          I'm aliased as <b className="font-medium">Leo</b> at work.
        </li>
        <li>I'm a builder, learner and freedom seeker.</li>
        <li>
          I live in <b className="font-medium">Ha Noi, Viet Nam</b>.
        </li>
        <li>
          I was born in the beautiful <b className="font-medium">Moc Chau</b>{' '}
          plateau.
        </li>
        <li>
          My first programming language I learned was{' '}
          <b className="font-medium">Pascal</b>.
        </li>
        <li>I love web development.</li>
        <li>I'm focusing on building eCommerce softwares.</li>
        <li>I work mostly with React/Node and pure JS.</li>
        <li>I'm Tu Le's husband.</li>
        <li>
          I'm a dog person <Emoji name="dog" />.
        </li>
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
        <li>I love watching football.</li>
        <li>
          I love playing guitar <Emoji name="guitar" />.
        </li>
        <li>I love rock music.</li>
        <li>
          I love playing video game <Emoji name="video-game" />, PES is my
          favorite one.
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  );
}
