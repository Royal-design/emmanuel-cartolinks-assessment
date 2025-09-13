'use client'

import React, { useState } from 'react'
import { services } from '../data'
import { ServiceCard } from './ServiceCard'
import { ChevronDown } from 'lucide-react'

export const Services = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full">
      <div className="flex items-center justify-between md:text-lg">
        <p className="p-2 font-bold">Generate</p>
        <button onClick={() => setOpen(!open)}>
          <span className="hidden items-center space-x-1 sm:flex">
            <ChevronDown
              className={`text-secondary h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
            />
            <span className="text-secondary text-sm font-medium">
              {open ? 'Show less' : 'Show all'}
            </span>
          </span>
        </button>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-2">
        {services.map((service, idx) => (
          <div key={idx} className="w-full">
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </div>
  )
}
