'use client'

import posthog from 'posthog-js'

export default function TrackableLink({
  event,
  properties,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: string
  properties?: Record<string, string>
}) {
  return (
    <a
      {...props}
      onClick={(e) => {
        posthog.capture(event, properties)
        props.onClick?.(e)
      }}
    >
      {children}
    </a>
  )
}
