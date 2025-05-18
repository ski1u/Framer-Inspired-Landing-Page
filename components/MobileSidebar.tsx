import React, { useState } from 'react'



import { Card } from './ui/card'
import { PrimaryButton } from './Buttons'
import ProfileButton from './ProfileButton'
import { Menu, ChevronFirst, ChevronUp } from 'lucide-react'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

import { navLinks } from '@/assets/data'

import { Button } from './ui/button'

const MobileSidebar = ({ className } : {
    className?: string
}) => {
    const [open, setOpened] = useState<boolean>(false)

    const openNavState: any = {}
    for (let nav of navLinks) if (nav.dropdownLinks.length) {openNavState[nav.title] = false}

    const [openNav, setOpenNav] = useState(openNavState)
    const toggleSidebar = () => setOpened(!open)

  return (
    <div className={cn("relative", className)}>
        <Menu onClick={toggleSidebar} />

        <motion.div
        className='fixed left-0  top-0 w-1/2 h-screen z-[99]'
        initial={{x: "-100%"}}
        animate={{x: open ? "0%" : "-100%"}}
        transition={{ease: "easeInOut", duration: 0.6, type: "spring"}}
        >
            <Card className='p-4 rounded-none w-full h-full space-y-4'>
                <div className='flex justify-between items-center'>
                    <p></p>
                    <div className='cursor-pointer sidebarHover' onClick={toggleSidebar}><ChevronFirst/></div>
                </div>

                <div className='space-y-2'>
                    {navLinks.map(({title, href, dropdownLinks }) => {
                        return dropdownLinks.length ? (
                        <>
                            <div onClick={() => setOpenNav({...openNav, [title]: !openNav[title]})} className='relative flex items-center cursor-pointer justify-between sidebarHover py-0' key={title}>
                                <p className={`font-semibold navText text-lg animatable`}>{title}</p>
                                {dropdownLinks.length > 0 && <ChevronUp className={`${openNav[title] && "rotate-180"} duration-200 transition-all`} color='#999' size={16} strokeWidth={3}/>}
                            </div>

                            {openNav[title] && (
                                <div>
                                    {dropdownLinks.map(({ dropdownTitle, Icon, dropdownHref }, index) => (
                                        <Link className='sidebarHover flex items-center space-x-2 pl-4' href={dropdownHref}>
                                            <Icon size={16} />
                                            <p className='font-medium navText text-sm'>{dropdownTitle}</p>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </>
                        ) : (
                        <Link href={href} onClick={() => setOpenNav({...openNav, [title]: !openNav[title]})} className='relative flex items-center cursor-pointer justify-between sidebarHover py-0' key={title}>
                            <p className={`font-semibold navText text-lg animatable`}>{title}</p>
                        </Link>
                        )
                    })}
                </div>
                
                <div className='space-y-4 w-full items-start flex flex-col justify-between'>
                    <PrimaryButton className='w-full' href='/download'>Download</PrimaryButton>
                    <ProfileButton className='w-full'/>
                </div>
            </Card>
        </motion.div>
    </div>
  )
}

export default MobileSidebar