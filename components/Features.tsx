"use client"

import React, { useState } from 'react'
import Link from 'next/link'

import { motion, AnimatePresence } from 'framer-motion'

import { Card } from './ui/card'
import Tag from './Tag'

const Features = () => {
  const [featureState, setFeatureState] = useState<number | null>(null)
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const features = [
    {
      title: "Plugins",
      description: "Connect your site to the most popular apps out there.",
      span: false
    },
    {
      title: "Powerful Effects",
      description: "Add effects with a few clicks and capture your audience’s attention when they land on your website.",
      span: true
    },

    {
      title: "Design and Layout",
      description: "Design your site on a familiar free-form canvas. Visually set up your breakpoints to make it responsive.",
      span: true
    },
    {
      title: "Navigation",
      description: "Visually structure your pages and link to them easily.",
      span: false
    },
  ]

  return (
    <div className='md:p'>
    <Tag>Systemized Solutions</Tag>
    <div className='grid grid-cols-3 grid-rows-2 gap-12'>
      {features.map(({ title, description, span }, index) => (
        <div key={title} className={`space-y-4 w-full ${span ? "col-span-2" : "col-span-1"}`}>
          <motion.div onClick={() => setSelectedId(index)} className='w-full h-fit' layoutId={String(index)}><Card className='w-full h-52 hover:-translate-y-1 animatable' /></motion.div>
          <div className='space-y-1'>
            <h2 className='font-semibold tracking-tight'>{title}</h2>
            <p className='secondaryText'>{description}</p>
            <Link onMouseEnter={() => setFeatureState(index)} onMouseLeave={() => setFeatureState(null)} href="/product/design" className='w-fit flex items-center space-x-1 cursor-pointer'>
              <p className='text-sm hrefText '>Learn more</p>
            </Link>
          </div>
        </div>  
      ))}
    </div>

    <AnimatePresence>
        {selectedId && (
          <div onClick={() => setSelectedId(null)} className='z-50 fixed inset-0 flex justify-center items-center'>
            <motion.div className='w-fit h-fit' layoutId={String(selectedId)}>
              <Card className='w-96 h-52 p-2'>
                {features[selectedId].title}
              </Card>
            </motion.div>
          </div>
        )}
    </AnimatePresence>
    </div>
  )
}

export const FeaturesTwo = () => {
  return (
    <></>
  )
}

export default Features

// look for other websites for ideas
// stripe