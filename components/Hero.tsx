"use client"

import React from 'react'

import { PrimaryButton, SecondaryButton } from './Buttons'

import Grid from "@/assets/Grid.png"
import Phone from "@/assets/Phone.png"

import Image from 'next/image'

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from 'react'

const Hero = () => {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  })
  const phoneY = useTransform(scrollYProgress, [0,1], [-200, 300])
  const phoneOpacity = useTransform(scrollYProgress, [0,.5], [0,1])

  return (
    <div ref={heroRef} className='w-full h-fit justify-center items-center pt-24 md:pt-32 pb-96  md:p'>
      <div className='justify-center items-center flex flex-col space-y-8 w-full'>
        <div className='justify-center items-center flex flex-col md:space-y-4 space-y-2 w-full'>
          <h1 className='title md:w-2/3 text-center tracking-tighter font-bold md:text-5xl text-3xl'>A new way to uplift productivity scientifically and strategically</h1>
          <p className='w-2/3 md:w-1/2 text-center font-medium tracking-tight navText md:text-base'>Discover a new way to optimize your workflow through science-based strategies and personalized tools through AI</p>
        </div>

        <div className='space-x-2 z-10 flex'>
          <PrimaryButton href='/download'>Download</PrimaryButton>
          <SecondaryButton href='/demo'>Try a demo</SecondaryButton>
        </div>

        <Image src={Grid} alt="Grid" className='absolute z-[-1] opacity-25 top-24 md:-top-0 md:w-[1000px]'/>
        <motion.img style={{translateY: phoneY, opacity: phoneOpacity}} src={Phone.src} alt="Phone" className='z-[1]' width={500}/>
      </div>
    </div>
  )
}

export default Hero