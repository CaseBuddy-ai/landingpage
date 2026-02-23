'use client'

import { useEffect, useState } from 'react'
import AnimateOnScroll from '@/components/ui/animate-on-scroll'

const APP_STORE_URL = 'https://apps.apple.com/app/casebuddy-ai/id6746489925'

type CurrencyInfo = {
  symbol: string
  price: string
}

const CURRENCY_MAP: Record<string, CurrencyInfo> = {
  US: { symbol: '$', price: '4.99' },
  GB: { symbol: '£', price: '4.99' },
  // Eurozone countries
  DE: { symbol: '€', price: '4.99' },
  FR: { symbol: '€', price: '4.99' },
  IT: { symbol: '€', price: '4.99' },
  ES: { symbol: '€', price: '4.99' },
  NL: { symbol: '€', price: '4.99' },
  BE: { symbol: '€', price: '4.99' },
  AT: { symbol: '€', price: '4.99' },
  IE: { symbol: '€', price: '4.99' },
  PT: { symbol: '€', price: '4.99' },
  FI: { symbol: '€', price: '4.99' },
  GR: { symbol: '€', price: '4.99' },
  LU: { symbol: '€', price: '4.99' },
  EE: { symbol: '€', price: '4.99' },
  LV: { symbol: '€', price: '4.99' },
  LT: { symbol: '€', price: '4.99' },
  SK: { symbol: '€', price: '4.99' },
  SI: { symbol: '€', price: '4.99' },
  MT: { symbol: '€', price: '4.99' },
  CY: { symbol: '€', price: '4.99' },
  HR: { symbol: '€', price: '4.99' },
}

const DEFAULT_CURRENCY: CurrencyInfo = { symbol: '$', price: '4.99' }

const features = [
  '24/7 access — practice anytime, anywhere',
  'Unlimited case interviews',
  'Personalised AI feedback on every case',
  'Full framework library (Profitability, M&A, Market Entry & more)',
  'Voice mode — practice like a real interview',
  'Detailed analytics & progress tracking',
  'New cases added regularly',
]

async function detectCountry(): Promise<string | null> {
  // Try multiple free geo APIs with fallbacks
  const apis = [
    {
      url: 'https://ipwho.is/',
      extract: (d: Record<string, string>) => d.country_code,
    },
    {
      url: 'https://api.country.is',
      extract: (d: Record<string, string>) => d.country,
    },
    {
      url: 'https://ipapi.co/json/',
      extract: (d: Record<string, string>) => d.country_code,
    },
  ]

  for (const api of apis) {
    try {
      const res = await fetch(api.url, { signal: AbortSignal.timeout(3000) })
      if (!res.ok) continue
      const text = await res.text()
      // Skip HTML responses (e.g. Cloudflare challenge pages)
      if (text.trimStart().startsWith('<')) continue
      const data = JSON.parse(text)
      const country = api.extract(data)
      if (country) return country
    } catch {
      continue
    }
  }
  return null
}

function useGeoCurrency() {
  const [currency, setCurrency] = useState<CurrencyInfo>(DEFAULT_CURRENCY)

  useEffect(() => {
    detectCountry().then((country) => {
      if (country && CURRENCY_MAP[country]) {
        setCurrency(CURRENCY_MAP[country])
      }
    })
  }, [])

  return currency
}

export default function Pricing() {
  const { symbol, price } = useGeoCurrency()

  return (
    <section id="pricing" className="bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <AnimateOnScroll>
              <h2 className="h2 mb-4">Simple, affordable pricing.</h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <p className="text-lg text-ink-muted">
                Start free, then unlock everything for the price of a coffee.
              </p>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll>
            <div className="max-w-lg mx-auto">
              {/* Pricing card */}
              <div className="bg-white rounded-3xl shadow-xl ring-2 ring-plum-200 p-8 md:p-10 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-plum-600 text-white text-xs font-medium px-4 py-1 rounded-full">
                  Most Popular
                </div>

                <div className="text-center mb-8">
                  <h3 className="font-display text-2xl mb-3">Premium</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl md:text-6xl font-semibold text-ink">{symbol}{price}</span>
                    <span className="text-ink-muted text-lg">/month</span>
                  </div>
                  <p className="text-sm text-ink-faint mt-2">Cancel anytime — no long-term commitment</p>
                </div>

                {/* Divider */}
                <div className="border-t border-sand-dark mb-6" />

                {/* Features */}
                <ul className="space-y-3.5 mb-8">
                  {features.map((feature) => (
                    <li key={feature} className="flex gap-3 items-start">
                      <svg className="w-5 h-5 text-sage-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <span className="text-ink-light text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn w-full text-white bg-plum-600 hover:bg-plum-700 hover:-translate-y-px hover:shadow-lg gap-2 justify-center"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Get Started
                </a>

                <p className="text-center text-xs text-ink-faint mt-4">
                  Free cases included — no credit card needed to start
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
