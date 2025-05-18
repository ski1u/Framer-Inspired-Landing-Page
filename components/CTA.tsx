import React from 'react'

import { PrimaryButton, SecondaryButton } from './Buttons'

const CTA = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-48 space-y-8 p pb-32'>
      <div className='w-full flex flex-col justify-center items-center space-y-4'>
        <h1 className='font-bold text-6xl tracking-tighter'>Sign up today.</h1>
        <p className='w-1/2 text-center secondaryText tracking-tight'>Experience the new way of strategy optimization and putting yourself first. Sign up today to learn more</p>
      </div>

      <div className='space-x-2 z-10'>
          <PrimaryButton href='/download'>Download</PrimaryButton>
          <SecondaryButton href='/demo'>Try a demo</SecondaryButton>
      </div>
    </div>
  )
}

export default CTA