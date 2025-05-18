"use client"

import React from 'react'

import Link from 'next/link'
import { cn } from '@/lib/utils'

import { Button } from './ui/button'

export const PrimaryButton = ({ children, href, className } : { 
    children?: React.ReactNode,
    href: string,
    className?: string
 }) => {
  return (
    <Link href={href} className='w-full h-fit'>
        <Button
        className={cn("secondaryBG font-semibold tracking-tight", className)}
        >
            {children}
        </Button>
    </Link>
  )
}

export const SecondaryButton = ({ children, href, className } : { 
    children?: React.ReactNode,
    href: string,
    className?: string
 }) => {
  return (
    <Link href={href} className='w-full h-fit'>
        <Button
        variant="outline"
        className={cn("bg-[#f2f2f2] font-semibold tracking-tight secondaryText", className)}
        >
            {children}
        </Button>
    </Link>
  )
}