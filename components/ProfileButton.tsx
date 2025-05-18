import React, { useState, useEffect } from 'react'

import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Avatar, AvatarFallback } from './ui/avatar'

import { SecondaryButton } from './Buttons'
import { Button } from './ui/button'
import Link from 'next/link'

import { getCurrentUser, signout } from '@/lib/supabase/auth.action'

const ProfileButton = ({ className } : {
  className?: string
}) => {
    const [user, setUser] = useState<any>(null)
    useEffect(() => {
      const fetchUser = async () => {
        const userF = await getCurrentUser()
        setUser(userF)
      }
  
      fetchUser()
    }, [])
    
    const handleClick = async () => await signout()

    return user ? (
    <Popover>
        <PopoverTrigger><Avatar><AvatarFallback>{user?.email[0].toUpperCase()}</AvatarFallback></Avatar></PopoverTrigger>

        <PopoverContent className='w-fit p-2 flex flex-col space-y-2'>
            <Link className='w-fit h-fit' href="/dashboard"><Button variant="ghost">Dashboard</Button></Link>
            <Button onClick={handleClick}>Sign out</Button>
        </PopoverContent>
    </Popover>
    ) : (
    <SecondaryButton className={className} href='/sign-in'>Sign In</SecondaryButton>
    )
}

export default ProfileButton