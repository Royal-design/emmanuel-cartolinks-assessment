'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { heroData } from '../data'
import { HeroCard } from './HeroCard'
import { DotButton, NavButton } from './HeroControl'

export const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      containScroll: 'trimSnaps',
      dragFree: false,
      loop: true,
    },
    [
      Autoplay({
        delay: 4000, // 4 seconds between slides
        stopOnInteraction: true, // Stop autoplay on user interaction
        stopOnMouseEnter: true, // Pause on hover
        rootNode: (emblaRoot) => emblaRoot.parentElement,
      }),
    ]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    const updateFlexBasis = () => {
      if (!emblaApi) return

      const slides = emblaApi.slideNodes()
      slides.forEach((slide) => {
        if (window.innerWidth >= 768) {
          slide.style.flexBasis = 'calc(100% - 30rem)'
        } else {
          slide.style.flexBasis = '100%'
        }
      })
    }

    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    updateFlexBasis()

    window.addEventListener('resize', updateFlexBasis)

    return () => {
      window.removeEventListener('resize', updateFlexBasis)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="relative mt-8 w-full max-md:px-6 md:pl-6">
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex max-md:gap-2">
            {heroData.map((item, index) => (
              <div key={index} className="w-full flex-none last:pr-0 sm:pr-4 md:pr-14">
                <div className="h-80 lg:h-100">
                  <HeroCard item={item} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* dot and nav */}
      <div className="mt-6 flex justify-between gap-2 px-6">
        <div className=""></div>
        <div className="flex items-center gap-2">
          {heroData.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <NavButton onClick={scrollPrev} disabled={!canScrollPrev} direction="prev" />
          <NavButton onClick={scrollNext} disabled={!canScrollNext} direction="next" />
        </div>
      </div>
    </div>
  )
}
