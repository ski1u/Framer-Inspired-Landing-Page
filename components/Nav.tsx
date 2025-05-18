"use client"

import React, { useState, useEffect } from 'react'

import { getCurrentUser } from '@/lib/supabase/auth.action'

import Logo from './Logo'
import Link from 'next/link'

import { ChevronUp } from 'lucide-react'
import { navLinks } from '@/assets/data'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { PrimaryButton } from './Buttons'

import ProfileButton from './ProfileButton'
import MobileSidebar from './MobileSidebar'

const Nav = () => {
  const [hoverState, setHoverState] = useState<string>("")
  const onHoverStateChange = (state : string) => setHoverState(state)

  const [user, setUser] = useState<any>(null)
  useEffect(() => {
    const fetchUser = async () => {
      const userF = await getCurrentUser()
      setUser(userF)
    }

    fetchUser()
  }, [])

  return (
    <div className='w-full h-fit space-x-12 flex md:p pt-8 px-8'>
      <MobileSidebar className='md:hidden sidebarHover cursor-pointer'/>
      <Logo className='hidden md:flex' />

      <div className='w-full justify-between items-center hidden md:flex'>
        <div className='flex items-center space-x-4'>
          {navLinks.map(({title, href, dropdownLinks }) => (
            <Link onMouseEnter={() => onHoverStateChange(title)} onMouseLeave={() => onHoverStateChange("")} href={href} className='relative flex items-center space-x-1 cursor-pointer' key={title}>
              <p className={`font-medium navText text-sm ${hoverState === title ? "opacity-75" : ""} animatable`}>{title}</p>
              {dropdownLinks.length > 0 &&
              <>
                <Popover open={hoverState === title ? true : false}>
                  <PopoverTrigger>
                    <ChevronUp className={`${hoverState === title ? "rotate-180" : ""} duration-200 transition-all`} color='#999' size={16} strokeWidth={3}/>
                  </PopoverTrigger>

                  <PopoverContent className="w-fit p-2">
                    {dropdownLinks.map(({ dropdownTitle, dropdownHref, Icon }) => (
                      <Link key={dropdownTitle} href={dropdownHref} className='flex items-center space-x-3 animatable hover:bg-[#fafafa] rounded-md p-2'>
                        <Icon size={16} />
                        <p className='font-medium navText text-sm'>{dropdownTitle}</p>
                      </Link>
                    ))}
                  </PopoverContent>
                </Popover>
              </>}
            </Link>
          ))}
        </div>

        <div className='flex items-center space-x-2'>
          <PrimaryButton href='/download'>Download</PrimaryButton>
          <ProfileButton/>
        </div>
      </div>
    </div>
  )
}

export default Nav