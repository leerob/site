import Link from 'next/link';

import NowPlaying from '@/components/NowPlaying';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-sm text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col items-center mb-8">
      <NowPlaying />
      <div className="flex space-x-4 mb-4">
        <ExternalLink href="https://twitter.com/leeerob">
          <span className="sr-only">Twitter</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </g>
          </svg>
        </ExternalLink>
        <ExternalLink href="https://github.com/leerob">
          <span className="sr-only">Github</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </g>
          </svg>
        </ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/leeerob">
          <span className="sr-only">LinkedIn</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </g>
          </svg>
        </ExternalLink>
        <ExternalLink href="https://www.youtube.com/channel/UCZMli3czZnd1uoc1ShTouQw">
          <span className="sr-only">YouTube</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
              <path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z" />
            </g>
          </svg>
        </ExternalLink>
        <ExternalLink href="mailto:me@leerob.io">
          <span className="sr-only">Email</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </g>
          </svg>
        </ExternalLink>
        <ExternalLink href="https://myspace.leerob.io">
          <span className="sr-only">MySpace</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path
              d="M20.519 12.439h-.672a4.152 4.152 0 003.402-4.078 4.152 4.152 0 00-4.147-4.147 4.15 4.15 0 00-4.138 3.934 3.852 3.852 0 00-3.663-2.675 3.848 3.848 0 00-3.803 3.303 3.59 3.59 0 00-3.31-2.213 3.587 3.587 0 00-3.582 3.585c0 1.456.873 2.711 2.123 3.271A3.032 3.032 0 000 16.431v2.555a.8.8 0 101.6 0V16.43a1.43 1.43 0 011.43-1.427h2.336c.789 0 1.43.64 1.43 1.427v2.555a.8.8 0 101.6 0V16.19a1.64 1.64 0 011.64-1.635h2.555c.904 0 1.638.733 1.639 1.635v2.795a.8.8 0 101.6 0v-2.794-.277a1.88 1.88 0 011.88-1.876h2.81a1.88 1.88 0 011.88 1.876v3.07a.8.8 0 101.6 0v-3.07a3.483 3.483 0 00-3.481-3.476zm-1.417-6.625a2.55 2.55 0 012.547 2.547 2.55 2.55 0 01-2.547 2.546 2.547 2.547 0 010-5.093zM11.3 7.074a2.248 2.248 0 012.246 2.244 2.248 2.248 0 01-2.246 2.245 2.246 2.246 0 010-4.49zm-7.114 1.09c1.094 0 1.984.89 1.984 1.984 0 1.093-.89 1.983-1.984 1.983a1.984 1.984 0 010-3.968zm3.267 6.076a3.021 3.021 0 00-1.805-.822 3.594 3.594 0 002.076-2.697 3.861 3.861 0 002.335 2.235h-.024c-1.053 0-1.99.505-2.582 1.284zm7.422-.339a3.23 3.23 0 00-2.285-.945h-.048a3.852 3.852 0 002.595-3.39 4.157 4.157 0 003.22 2.873h-.647a3.48 3.48 0 00-2.835 1.462z"
              fill="currentColor"
            />
          </svg>
        </ExternalLink>
      </div>
      <div className="space-x-3">
        <Link href="/uses">
          <a className="text-sm text-gray-500 hover:text-gray-600">/uses</a>
        </Link>
        <ExternalLink href="https://photos.leerob.io">/photos</ExternalLink>
        <Link href="/newsletter">
          <a className="text-sm text-gray-500 hover:text-gray-600">
            /newsletter
          </a>
        </Link>
        <Link href="/snippets">
          <a className="text-sm text-gray-500 hover:text-gray-600">/snippets</a>
        </Link>
        <Link href="/tweets">
          <a className="text-sm text-gray-500 hover:text-gray-600">/tweets</a>
        </Link>
      </div>
    </footer>
  );
}
