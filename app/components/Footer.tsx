import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="bg-secondary-darkgrey flex items-center justify-between px-6 py-4">
      {/* logo */}
      <div className="inline-flex items-center gap-2">
        <Image
          src="/krea.png"
          alt="Krea Logo"
          width={32}
          height={32}
          className="size-8 rounded-md"
        />
        <span className="font-bold text-white md:text-lg">Krea AI</span>
      </div>
      <div className="flex items-center gap-4 text-white">
        <p className="font-bold whitespace-nowrap md:text-xl">curated by</p>
        <Image
          src="/mobbin.png"
          alt="Mobbin Logo"
          width={120}
          height={120}
          className="w-30 rounded-md"
        />
      </div>
    </footer>
  )
}
