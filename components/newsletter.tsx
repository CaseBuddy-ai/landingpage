import AnimateOnScroll from '@/components/ui/animate-on-scroll'

const APP_STORE_URL = 'https://apps.apple.com/app/casebuddy-ai/id6746489925'

export default function Newsletter() {
  return (
    <section className="bg-gradient-to-br from-plum-600 via-plum-700 to-plum-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-16 md:py-24">
          <AnimateOnScroll animation="animate-fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                Ready to nail your consulting interview?
              </h2>
              <p className="text-lg text-plum-200 mb-4 leading-relaxed">
                Turn the next two weeks into focused, high-quality practice. CaseBuddy helps you walk into every case knowing what to expect.
              </p>

              {/* Social proof */}
              <div className="flex items-center justify-center gap-2 mb-8">
                <div className="flex -space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-plum-100">
                  Trusted by <span className="font-semibold text-white">300+ students</span>
                </span>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  className="btn bg-white text-plum-700 hover:bg-cream hover:-translate-y-px hover:shadow-lg w-full sm:w-auto gap-2"
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download CaseBuddy on iOS
                </a>
                <a
                  href="#features"
                  className="text-sm text-plum-200 hover:text-white transition-colors underline underline-offset-4"
                >
                  Learn more about how it works
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
