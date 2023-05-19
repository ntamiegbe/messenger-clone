'use client'

import { useState } from 'react'
import useRoutes from '../../hooks/useRoutes'
import DesktopSidebarItem from './DesktopSidebarItem'
import Avatar from './Avatar'

const DesktopSidebar = () => {
  const routes = useRoutes()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-20 xl:px-6 lg:overflow-y-auto lg:bg-darkerBlue border-lightBlue lg:border-r lg:pb-4 lg:flex lg:flex-col justify-between'>
      <nav className='mt-4 flex flex-col justify-between'>
        <ul role='list' className='flex flex-col items-center space-y-1'>
          {routes.map((item) => (
            <DesktopSidebarItem
              key={item.label}
              href={item.href}
              label={item.label}
              icon={item.icon}
              active={item.active}
            />
          ))}
        </ul>
      </nav>
      <nav className='mt-4 flex flex-col justify-between items-center'>
        <div className="cursor-pointer hover:opacity-75 transition">
          <Avatar />
        </div>
      </nav>
    </div>
  )
}

export default DesktopSidebar