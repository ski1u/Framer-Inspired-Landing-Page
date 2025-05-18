import React from 'react'

import { Card } from './ui/card'
import { PrimaryButton, SecondaryButton } from './Buttons'

import { Check, CheckCircle, CheckCircle2 } from 'lucide-react'

const Price = () => {
  const pricing = [
    {
      title: "Personal",
      cost: 5,
      features: ["1 project", "Access to analytics", "Access to Insight panel", "Sharing features"],
      secondary: false
    },
    {
      title: "Professional",
      cost: 10,
      features: ["2 projects", "Access to analytics", "Access to Insight panel", "Sharing features"],
      secondary: true
    },    {
      title: "Business",
      cost: 50,
      features: ["Unlimited projects", "Access to analytics", "Access to Insight panel", "Sharing features"],
      secondary: false
    }
  ]

  return (
    <div className='flex justify-between mt-40 p'>
      {pricing.map(({ title, cost, features, secondary }, index) => (
        <Card className={`flex flex-col p-6 space-y-8 w-80`} key={`pricing-${index}`}>
          <div className='flex justify-between items-center'>
            <p className={`font-bold tracking-tighter`}>{title}</p>
            {secondary && (
              <p className='text-xs tracking-tight tag font-medium secondaryText'>Recommended</p>
            )}
          </div>
          
          <div className='flex items-end'>
            <p className={`font-bold text-5xl`}>{`$${cost}`}</p>
            <p className='tracking-tight secondaryText'>/month</p>
          </div>

          <div className='space-y-2'>
            {features.map((feature, fIndex) => (
              <div className='flex items-center space-x-1' key={`pricing-feature-${fIndex}`}>
                <CheckCircle2 size={18}/>
                <p className={``}>{feature}</p>
              </div>
            ))}
          </div>

          <div className='w-full'>
            {!secondary ? <SecondaryButton className='w-full' href='/product'>Get Started</SecondaryButton> :
            <PrimaryButton className='w-full' href='/product'>Get Started</PrimaryButton>}
          </div>
        </Card>
      ))}
    </div>
  )
}

export default Price