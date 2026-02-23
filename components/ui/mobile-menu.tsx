'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

const APP_STORE_URL = 'https://apps.apple.com/app/casebuddy-ai/id6746489925'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-ink-muted hover:text-ink transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/* Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
        style={mobileNavOpen ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
      >
        <ul className="bg-cream border border-sand-dark rounded-lg shadow-lg px-4 py-3 space-y-1">
          <li>
            <a
              href="#screenshots"
              className="block py-2 px-3 text-sm text-ink-muted hover:text-ink rounded-md hover:bg-sand transition-colors"
              onClick={() => setMobileNavOpen(false)}
            >
              App
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="block py-2 px-3 text-sm text-ink-muted hover:text-ink rounded-md hover:bg-sand transition-colors"
              onClick={() => setMobileNavOpen(false)}
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="block py-2 px-3 text-sm text-ink-muted hover:text-ink rounded-md hover:bg-sand transition-colors"
              onClick={() => setMobileNavOpen(false)}
            >
              FAQ
            </a>
          </li>
          <li className="pt-2 border-t border-sand-dark">
            <a
              href={APP_STORE_URL}
              className="font-medium w-full inline-flex items-center justify-center px-4 py-2.5 my-1 rounded-full text-white bg-plum-600 hover:bg-plum-700 transition-all duration-200"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileNavOpen(false)}
            >
              Download on iOS
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
