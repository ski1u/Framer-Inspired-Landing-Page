"use client"

import React from 'react'

import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Features, { FeaturesTwo } from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Price from '@/components/Price'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

import GoTopButton from '@/components/GoTopButton'

const Home = () => {
  return (
    <>
      <Nav/>
      <Hero/>
      <Features/>
      <FeaturesTwo/>
      <Testimonials/>
      <Price/>
      <CTA/>
      <Footer/>
      <GoTopButton/>
    </>
  )
}

export default Home