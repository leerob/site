import React from 'react'
import { Link } from 'next-view-transitions'
import type { MDXComponents } from 'mdx/types'
import { highlight } from 'sugar-high'

const components = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="font-medium pt-12 mb-0 fade-in">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-gray-800 font-medium mt-8 mb-3">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-gray-800 font-medium mt-8 mb-3">{children}</h3>
  ),
  h4: ({ children }: { children: React.ReactNode }) => (
    <h4 className="font-medium">{children}</h4>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="text-gray-800 leading-snug">{children}</p>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="text-gray-800 list-decimal pl-5 space-y-2">{children}</ol>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="text-gray-800 list-disc pl-5 space-y-1">{children}</ul>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="pl-1">{children}</li>
  ),
  em: ({ children }: { children: React.ReactNode }) => (
    <em className="font-medium">{children}</em>
  ),
  strong: ({ children }: { children: React.ReactNode }) => (
    <strong className="font-medium">{children}</strong>
  ),
  a: ({ href, children }: { href: string; children: React.ReactNode }) => {
    const className = "text-blue-500 hover:text-blue-700"
    if (href.startsWith('/')) {
      return <Link href={href} className={className}>{children}</Link>
    }
    if (href.startsWith('#')) {
      return <a href={href} className={className}>{children}</a>
    }
    return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>
  },
  code: ({ children, ...props }: { children: string }) => {
    const codeHTML = highlight(children)
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
  },
  Table: ({ data }: { data: { headers: string[], rows: string[][] } }) => (
    <table>
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700">{children}</blockquote>
  ),
}

export function useMDXComponents(otherComponents: MDXComponents): MDXComponents {
  return {
    ...otherComponents,
    ...components,
  }
}
