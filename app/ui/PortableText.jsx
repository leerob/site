import Refractor from 'react-refractor';

import Link from 'next/link';
import { SanityImage } from '@/app/ui/SanityImage';
import { extractLanguage } from '@/app/lib/utils';
import javascript from 'refractor/lang/javascript';
import typescript from 'refractor/lang/typescript';
import tsx from 'refractor/lang/tsx';
import shell from 'refractor/lang/shell-session';

Refractor.registerLanguage(javascript);
Refractor.registerLanguage(typescript);
Refractor.registerLanguage(tsx);
Refractor.registerLanguage(shell);

export const PTComponents = {
  types: {
    codeBox: ({ value }) => {
      return (
        <Refractor
          language={extractLanguage(value.filename)}
          value={value.code}
        />
      );
    },
    imageWithAlt: ({ value }) => {
      return <SanityImage image={value} />;
    },
    break: ({ value }) =>
      value ? <hr className="horizontal-divider" /> : <></>
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>
  },
  listItem: {
    bullet: ({ children }) => (
      <li style={{ listStyleType: 'square' }}>{children}</li>
    ),
    number: ({ children }) => (
      <li style={{ listStyleType: 'decimal' }}>{children}</li>
    )
  },
  marks: {
    internalLink: ({ children, value }) => {
      const { slug, type } = value;
      const href = type === 'post' ? `/blog/${slug}` : `/snippet/${slug}`;
      return <Link href={href}>{children}</Link>;
    },
    externalLink: ({ children, value }) => {
      const { href = '', blank = false, title = 'Breakout so' } = value;
      const isInternal = href.includes('breakout.so');
      return isInternal ? (
        <Link
          href={href}
          title={title}
          className="cursor-pointer text-lg font-semibold text-gray-900"
        >
          {children}
        </Link>
      ) : (
        <a
          href={href}
          className="cursor-pointer text-lg font-semibold text-gray-900"
          title={title}
          target={blank ? '_blank' : '_self'}
          rel="norefferer noreferrer"
        >
          {children}
        </a>
      );
    },
    superscript: ({ children, value }) => (
      <sup className="align-super">{children}</sup>
    ),
    italic: ({ children }) => <i className="font-medium">{children}</i>,
    em: ({ children }) => <em>{children}</em>,
    highlight: ({ children }) => (
      <span className="highlight-line">{children}</span>
    )
  },
  block: {
    h2: ({ children, value }) => (
      <h2 id={`${value._key}`}>
        <a href={`#${value._key}`} className="anchor scrollable"></a>
        {children}
      </h2>
    ),
    h3: ({ children, value }) => (
      <h3 id={`${value._key}`}>
        <a href={`#${value._key}`} className="anchor scrollable"></a>
        {children}
      </h3>
    ),
    h4: ({ children, value }) => (
      <h4 id={`${value._key}`}>
        <a href={`#${value._key}`} className="anchor scrollable"></a>
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <div className="py-1">
        <blockquote className="flex">
          <p className="border-l-6 border-gray-400 pl-6 font-medium">
            {children}
          </p>
        </blockquote>
      </div>
    ),
    normal: ({ children }) => <p className="mt-1">{children}</p>
  }
};
