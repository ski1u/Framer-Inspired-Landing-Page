"use client"

import React, { useEffect, useState } from "react"

import { Card } from "./ui/card"
import Logo from "./Logo"

import { motion, AnimatePresence } from "framer-motion"

const Account = ({ children } : {
    children?: React.ReactNode
}) => {
  const words = ["Framer", "Strategizing", "Planning", "Organizing", "Networking", "Optimization", "Framework", "AI", "Layout"]
  const [wordIndex, setWordIndex] = useState<number>(0)
  useEffect(() => {
    const interval = setTimeout(() => setWordIndex(prev => (prev + 1) % words.length), 3000)

    return () => clearTimeout(interval)
  }, [wordIndex])

  return (
  <div className='h-screen w-screen flex'>
    <Card className='w-1/3 h-full rounded-none flex justify-center items-center p-16 relative'>
        <Logo className='absolute left-6 top-6' />
        {children}
    </Card>

    <div className='flex flex-col justify-center items-center w-2/3'>
      <div className="w-1/2">
        <p className="font-semibold text-6xl">Get the</p>
        <div>
          <p className="font-semibold text-6xl">most with</p>
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.p
            className="font-bold text-6xl underline underline-offset-8"
            initial={{y: -12, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            exit={{y: 12, opacity: 0}}
            transition={{duration: 0.25}}
            key={words[wordIndex]}
            >
              {words[wordIndex] + "."}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
</div>
  )
}

export default Account