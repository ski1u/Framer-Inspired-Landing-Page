import React from 'react'

import Logo from './Logo'

import Image from 'next/image'

// socials
import Facebook from "@/assets/facebook.svg"
import Instagram from "@/assets/Instagram.svg"
import Tiktok from "@/assets/Tiktok.svg"
import Twitter from "@/assets/Twitter.svg"

import Link from 'next/link'

const Footer = () => {
  const socials = [Facebook, Instagram, Tiktok, Twitter]

  const footerInfo = [
    {
      title: "Product",
      pages: [
        { name: "Design", href: "/product/design" },
        { name: "Content", href: "/product/content" },
        { name: "Publish", href: "/product/publish" },
      ]
    },
    {
      title: "Resources",
      pages: [
        { name: "Blog", href: "/resources/blog" },
        { name: "Careers", href: "/resources/careers" },
        { name: "Docs", href: "/resources/docs" },
        { name: "About", href: "/resources/about" },
      ]
    },
    {
      title: "Community",
      pages: [
        { name: "Join", href: "/community/join" },
        { name: "Events", href: "/community/events" },
      ]
    },
    {
      title: "Company",
      pages: [
        { name: "Changelog", href: "/changelog" },
        { name: "Demo", href: "/demo" },
      ]
    }
  ]  

  return (
    <div className='bg-black h-80 flex p-8'>
      <div className='flex flex-col justify-between'>
        <div className='space-y-2'>
          <Logo inverse={true} />
          <p className='secondaryText w-1/2 text-sm'>A software company, meant to boost, help, and benefit people's problem with technology and softwares.</p>
        </div>

        <div className='flex space-x-2'>
          {socials.map((Icon, index) => (
            <Image className='cursor-pointer' src={Icon} alt="social" width={24} />
          ))}
        </div>
      </div>

      <div className='flex justify-end space-x-20 w-full'>
        {footerInfo.map(({ title, pages }, index) => (
          <div className='flex flex-col space-y-4'>
            <p className='text-white font-bold text-sm'>{title}</p>

            <div className='flex flex-col space-y-2'>
              {pages.map(({ name, href }, index) => (
                <Link className='text-sm secondaryText animatable hover:text-opacity-75 w-fit' href={href}>{name}</Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
// [mask-image:linear-gradient(to_right,transparent,black,black,black,black,black,black,transparent)]
export default Footer