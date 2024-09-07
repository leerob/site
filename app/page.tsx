import React from 'react'
import { Link } from 'next-view-transitions'

function AnimatedName() {
  return (
    <h1 className="font-medium pt-12 transition-element">
      <span className="sr-only">Lee Robinson</span>
      <span aria-hidden="true" className="block overflow-hidden group relative">
        <span className="inline-block transition-all duration-300 ease-in-out group-hover:-translate-y-full">
          {'Lee Robinson'.split('').map((letter, index) => (
            <span
              key={index}
              className="inline-block"
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </span>
        <span className="inline-block absolute left-0 top-0 transition-all duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
          {'leerob'.split('').map((letter, index) => (
            <span
              key={index}
              className="inline-block"
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              {letter}
            </span>
          ))}
        </span>
      </span>
    </h1>
  )
}

export default function Home() {
  return (
    <>
      <AnimatedName />
      <div className="text-gray-800 space-y-4 leading-snug">
        <p>
          I'm a frontend developer, optimist, and community builder. I work at <Link href="/work" className="text-blue-500 hover:text-blue-700">Vercel</Link>, where I teach the <Link href="/work" className="text-blue-500 hover:text-blue-700">Next.js</Link> community, an open-source web framework built with React.
        </p>
        <p>
          I create educational content for developers, teaching them about TypeScript, React and Next.js, and more.
          I've worked with and advised companies on <Link href="/n/developer-marketing" className="text-blue-500 hover:text-blue-700">developer marketing</Link>, <Link href="/n/devrel" className="text-blue-500 hover:text-blue-700">developer relations</Link>, building <Link href="/n/devtools" className="text-blue-500 hover:text-blue-700">developer tools</Link>, and <Link href="/n/moderation" className="text-blue-500 hover:text-blue-700">open-source</Link>.
        </p>
        <p>
          I invest small angel checks into early stage startups building tools for developers.
        </p>
      </div>
    </>
  )
}

