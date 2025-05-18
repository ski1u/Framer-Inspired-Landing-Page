"use client"

import React, { useEffect, useState } from 'react'

import { signout } from '@/lib/supabase/auth.action'
import { getCurrentUser } from '@/lib/supabase/auth.action'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from '@/components/ui/card'

import { Button } from '@/components/ui/button'
import Logo from '@/components/Logo'

const TabCard = ({ children, value, className } : {
  value: string
  children?: React.ReactNode
  className?: string
}) => {
  return (
    <Card className={'w-80 h-72 p-6 space-y-4'}>
      <h1 className='font-bold tracking-tight text-xl'>{value}</h1>
      <div className={className}>
        {children}
      </div>
    </Card>
  )
}

// add a loading screen for loading users
// in the homepage, add a checkup where: not login: show signin button, if yes: show profile avatar
// fix dashboard card tab

// optimize features page

const Dashboard = () => {
  const tabTriggers = ["Account", "Settings"]
  const [user, setUser] = useState<any>(null)

  const handleClick = async () => await signout()
  useEffect(() => {
    const fetchUser = async () => {
      const userF = await getCurrentUser()
      setUser(userF)
    }

    fetchUser()
  }, [])

  return (
    <div className='flex justify-center items-center w-screen h-screen relative'>
      <Logo className='absolute left-6 top-6' />

      <Tabs defaultValue='Account' orientation='horizontal'>
        <TabsList className='w-full grid grid-rows-1 grid-cols-2'>
          {tabTriggers.map((trigger: string, index: number) => (
            <TabsTrigger key={`trigger-${index}`} value={trigger}>{trigger}</TabsTrigger>
          ))}
        </TabsList>
        
        <TabsContent value='Account'>
          <TabCard value="Account" className='flex flex-col justify-between space-y-4'>
            <div className='flex space-x-2'><p className='font-semibold'>Email: </p><p>{user?.email}</p></div>

            <Button onClick={handleClick}>Sign Out</Button>
          </TabCard>
        </TabsContent>

        <TabsContent value="Settings">
          <TabCard value="Settings">
            ...
          </TabCard>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Dashboard