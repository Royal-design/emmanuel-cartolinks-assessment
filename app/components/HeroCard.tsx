import Image from 'next/image'
import { HeroType } from '../type'
import { Button } from '@/components/ui/button'

export const HeroCard = ({ item }: { item: HeroType }) => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl">
      <Image
        src={item.image}
        alt={item.name}
        fill
        sizes="(max-width: 1024px) 100vw, 320px"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent md:from-black/60">
        <div className="flex h-full flex-col justify-end px-8">
          <div className="mb-8 flex flex-col max-md:space-y-4 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col">
              <h2 className="mb-4 text-2xl leading-tight font-bold text-white lg:text-3xl">
                {item.name}
              </h2>
              <p className="w-full text-sm leading-tight text-white md:max-w-md md:text-white/80 lg:text-base">
                {item.text}
              </p>
            </div>
            <Button className="w-fit cursor-pointer rounded-full bg-white text-black hover:bg-white/80">
              {item.actionText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
