"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { usePathname } from "next/navigation"

type Heading = {
  id: string
  text: string
  level: number
}

function generateId(text: string): string {
  return (
    text
      .toLowerCase()
      // Remove numbers and dots from the start
      .replace(/^[\d.]+\.?\s*/, "")
      // Replace special characters and spaces with hyphens
      .replace(/[^a-z0-9]+/g, "-")
      // Remove leading and trailing hyphens
      .replace(/^-+|-+$/g, "")
  )
}

export function Sidebar() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [isHovered, setIsHovered] = useState(false)
  const [activeHeading, setActiveHeading] = useState<string>("")
  const pathname = usePathname()
  const manuallyClickedRef = useRef<string>("")
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Extract headings from the rendered content
    const content = document.querySelector("main")
    if (!content) return

    const headingElements = content.querySelectorAll("h1, h2, h3, h4, h5, h6")
    const extractedHeadings: Heading[] = Array.from(headingElements)
      .filter((heading) => heading.tagName === "H2")
      .map((heading) => {
        const text = heading.textContent || ""
        const id = heading.id || generateId(text)

        // Set the ID on the heading element if it doesn't have one
        if (!heading.id) {
          heading.id = id
        }

        return {
          id,
          text,
          level: Number.parseInt(heading.tagName[1]),
        }
      })

    setHeadings(extractedHeadings)
  }, [pathname])

  useEffect(() => {
    // Track active heading based on scroll position
    const handleScroll = () => {
      // Don't update active heading if user manually clicked recently
      if (manuallyClickedRef.current) return

      const headingElements = headings.map((h) => document.getElementById(h.id)).filter(Boolean)

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i]
        if (element && element.getBoundingClientRect().top <= 100) {
          setActiveHeading(element.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [headings])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      // Remove highlight from any previously highlighted elements
      const previouslyHighlighted = document.querySelectorAll(".bg-blue-500\\/20")
      previouslyHighlighted.forEach((el) => {
        el.classList.remove("bg-blue-500/20", "transition-colors", "duration-300")
      })

      // Set manual click state immediately using ref for instant effect
      manuallyClickedRef.current = id

      // Force set the active heading immediately when clicked
      setActiveHeading(id)

      // Add temporary highlight styling to new element
      const originalClasses = element.className
      element.classList.add("bg-blue-500/20", "transition-colors", "duration-300")

      // Scroll to element
      element.scrollIntoView({ behavior: "smooth" })

      // Remove highlight after 5 seconds and allow scroll tracking again
      timeoutRef.current = setTimeout(() => {
        element.classList.remove("bg-blue-500/20", "transition-colors", "duration-300")
        element.className = originalClasses
        manuallyClickedRef.current = "" // Clear manual click state to re-enable scroll tracking
      }, 5000)
    }
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div className="w-64 fixed right-0 top-0 h-screen p-6">
      <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        {/* Collapsed State - Bars */}
        <div className={`transition-opacity duration-200 ${isHovered ? "opacity-0" : "opacity-100"}`}>
          <div className="flex flex-col space-y-3 p-2">
            {headings.map((heading) => (
              <div
                key={heading.id}
                className={`h-0.5 w-6 rounded-full transition-all duration-200 cursor-pointer ${
                  activeHeading === heading.id
                    ? "bg-black shadow-[0_0_8px_rgba(0,0,0,0.3)] dark:bg-white dark:shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                    : "bg-gray-300 dark:bg-white/10 "
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById(heading.id)
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              />
            ))}
          </div>
        </div>

        {/* Expanded State - Custom Card */}
        <div
          className={`absolute right-0 top-0 transition-all duration-200 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
          }`}
        >
          <div className="w-64 rounded-lg border bg-card text-card-foreground shadow-lg border-gray-200 dark:border-gray-800 ">
            <div className="p-4">
              <nav className="space-y-1">
                {headings.map((heading) => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    onClick={(e) => handleClick(e, heading.id)}
                    className={`block py-1.5 px-2 text-sm rounded transition-colors cursor-pointer text-gray-400 hover:text-black hover:bg-gray-100 dark:hover:text-white dark:hover:bg-white/10 ${
                      activeHeading === heading.id
                        ? "!text-blue-500 dark:!text-blue-400 "
                        : " dark:hover:text-white dark:hover:bg-gray-800"
                    }`}
                  >
                    {heading.text}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
