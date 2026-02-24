import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './mobile-menu'
import Logo from '@/public/images/Logo.png'

const APP_STORE_URL = 'https://apps.apple.com/app/casebuddy-ai/id6746489925'

export default function Header() {
  return (
    <header className="sticky top-0 w-full z-30 bg-cream/90 backdrop-blur-md border-b border-sand-dark/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Link href="/" className="flex items-center gap-2.5" aria-label="CaseBuddy">
              <Image
                src={Logo}
                alt="CaseBuddy logo"
                width={32}
                height={32}
                className="w-8 h-8 rounded-lg"
              />
              <span className="font-semibold text-ink tracking-tight">CaseBuddy</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center gap-8">
              <li>
                <a href="/#screenshots" className="text-sm text-ink-muted hover:text-ink transition-colors">
                  App
                </a>
              </li>
              <li>
                <a href="/#features" className="text-sm text-ink-muted hover:text-ink transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="/#faq" className="text-sm text-ink-muted hover:text-ink transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <Link href="/quiz/frameworks" className="text-sm text-ink-muted hover:text-ink transition-colors">
                  Quiz
                </Link>
              </li>
              <li>
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-sm text-white bg-plum-600 hover:bg-plum-700 hover:-translate-y-px hover:shadow-lg"
                >
                  Download on iOS
                </a>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
