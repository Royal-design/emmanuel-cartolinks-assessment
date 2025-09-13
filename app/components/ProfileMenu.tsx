import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function ProfileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-2 rounded-md bg-transparent p-2 transition hover:bg-transparent"
      >
        <Image src="/avatar.svg" width={24} height={24} alt="Avatar" className="size-6" />
        <span className="hidden items-center space-x-1 sm:flex">
          <span className="text-primary-dark text-sm dark:text-white">John Doe</span>
          <ChevronDown
            className={`text-primary-dark h-4 w-4 text-sm transition-transform dark:text-white ${open ? 'rotate-180' : ''}`}
          />
        </span>
      </button>

      {open && (
        <div className="bg-background absolute right-0 w-40 rounded-md border shadow-lg">
          <ul className="text-primary-dark text-sm dark:text-white">
            <li className="hover:bg-secondary-grey cursor-pointer px-4 py-2">Profile</li>
          </ul>
        </div>
      )}
    </div>
  )
}
