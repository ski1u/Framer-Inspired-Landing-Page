import React from 'react'

import Tag from './Tag'
import { Card } from './ui/card'

import { motion } from 'framer-motion'

import Image from 'next/image'
import Profile from "@/assets/Profile.png"

const TestimonialCard = ({ name, username, message } : {
  name: string
  username: string
  message: string
}) => {
  return (
    <Card className='p-4 h-fit w-72 space-y-3'>
      <div className='flex items-center space-x-4'>
        <Image src={Profile} alt="profile" className='w-8 h-8'/>
        <div>
          <p className='font-semibold tracking-tight text-sm'>{name}</p>
          <p className='secondaryText text-xs'>{username}</p>
        </div>
      </div>

      <p className='secondaryText break-words text-sm'>{message}</p>
    </Card>
  )
}

const Testimonials = () => {
  const testimonials = [
    {
      name: "Eva Elle",
      username: "@evaelle",
      message: "Thank you for building such an empowering tool, especially for designers! The site went from Figma to Framer in less than a week!"
    },
    {
      name: "Jake Ryland",
      username: "@jake.designs",
      message: "The functionality is outstanding! Saved me hours of coding and made my work with complex animations so much easier."
    },
    {
      name: "Sophia Turner",
      username: "@sophiaturner",
      message: "Amazing experience! My project looked super polished thanks to the features here. Highly recommend it for design pros."
    },
    {
      name: "Lucas Diaz",
      username: "@lucas.dz",
      message: "I've tried multiple tools, but this is by far the most intuitive for quickly creating beautiful sites. A game-changer!"
    },
    {
      name: "Maya Lin",
      username: "@mayal",
      message: "Absolutely love the smooth integration with other platforms. It made creating my website an absolute breeze!"
    },
    {
      name: "Nathan Park",
      username: "@nathanpark",
      message: "What a fantastic tool! It gives me complete control over styling and animations without the need for heavy coding."
    },
    {
      name: "Zara Patel",
      username: "@zarap.design",
      message: "Clean, intuitive, and so much fun to work with! It’s like Figma but with the added power of real code."
    },
    {
      name: "Omar El-Sayed",
      username: "@omar.sayed",
      message: "This platform transformed my workflow. The end result looks professional and it's surprisingly fast to learn!"
    }
  ];

  const t1 = testimonials.slice(0,4)
  const t2 = testimonials.slice(4,8)

  return (
    <div className='mt-52 p'>
      <Tag>Testimonials</Tag>
      <div className='flex justify-center items-center'>
        <div className='overflow-hidden p-1 grid grid-rows-2 space-y-2 [mask-image:linear-gradient(to_right,transparent,black,black,black,black,black,black,transparent)]'>
          {[t1,t2].map((t, index) => (
            <motion.div
            key={`t-${index}`}
            animate={{x: index % 2 == 0 ? ["-50%", "0%"] : ["0%", "-50%"]}}
            transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
            className='flex space-x-4'>
              {[...t, ...t].map(({ name, username, message }, indexTwo ) => (
                <div key={`testimonial-${indexTwo}`}><TestimonialCard name={name!} username={username!} message={message!} /></div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials