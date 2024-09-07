import React from 'react'
import { Link } from 'next-view-transitions'
import type { MDXComponents } from 'mdx/types'
import { highlight } from 'sugar-high'

const components = {
  h1: ({ children }) => (
    <h1 className="font-medium pt-12 mb-0 fade-in">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-gray-800 font-medium mt-8 mb-3">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-gray-800 font-medium mt-8 mb-3">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="font-medium">{children}</h4>
  ),
  p: ({ children }) => (
    <p className="text-gray-800 leading-snug">{children}</p>
  ),
  ol: ({ children }) => (
    <ol className="text-gray-800 list-decimal pl-5 space-y-2">{children}</ol>
  ),
  ul: ({ children }) => (
    <ul className="text-gray-800 list-disc pl-5 space-y-1">{children}</ul>
  ),
  li: ({ children }) => (
    <li className="pl-1">{children}</li>
  ),
  em: ({ children }) => (
    <em className="font-medium">{children}</em>
  ),
  strong: ({ children }) => (
    <strong className="font-medium">{children}</strong>
  ),
  a: ({ href, children, ...props }) => {
    const className = "text-blue-500 hover:text-blue-700"
    if (href?.startsWith('/')) {
      return <Link href={href} className={className}>{children}</Link>
    }
    if (href?.startsWith('#')) {
      return <a href={href} className={className} {...props}>{children}</a>
    }
    return <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props}>{children}</a>
  },
  code: ({ children, ...props }) => {
    const codeHTML = highlight(children as string)
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
  },
  Table: ({ data }) => (
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
  blockquote: ({ children }) => (
    <blockquote className="ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700">{children}</blockquote>
  ),
}

export function useMDXComponents(otherComponents: MDXComponents): MDXComponents {
  return {
    ...otherComponents,
    ...components,
  }
}
