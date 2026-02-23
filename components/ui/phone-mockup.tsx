import Image, { StaticImageData } from 'next/image'

interface PhoneMockupProps {
  src: StaticImageData
  alt: string
  className?: string
}

export default function PhoneMockup({ src, alt, className = '' }: PhoneMockupProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Phone frame */}
      <div className="relative bg-[#1a1a1a] rounded-[2.5rem] p-2.5 shadow-xl ring-1 ring-black/10">
        {/* Notch / Dynamic Island */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[22px] bg-[#1a1a1a] rounded-b-2xl z-10" />

        {/* Screen */}
        <div className="relative rounded-[2rem] overflow-hidden bg-black">
          <Image
            src={src}
            alt={alt}
            width={280}
            height={607}
            className="w-full h-auto block"
            quality={90}
          />
        </div>

        {/* Bottom bar indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-white/20 rounded-full z-10" />
      </div>
    </div>
  )
}
