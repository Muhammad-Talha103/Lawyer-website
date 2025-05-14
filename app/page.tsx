import Hero from '@/components/hero/Hero'
import Hero2 from '@/components/hero/Trust-Your-Feature'
import Hero3 from '@/components/hero/Leagal-advisor'
import Hero4 from '@/components/hero/Pricing-selector'
import Hero5 from '@/components/hero/Leagal-services'
import Hero6 from '@/components/hero/Success-story'
import Hero7 from '@/components/hero/Why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <div className=' mt-2.5'></div>
      <Hero2/>
      <div className='w-full border border-gray-200 mt-6'></div>
      <Hero3/>
      <div className='w-full border border-gray-200 mt-6'></div>
      <Hero4/>
      <div className='w-full border border-gray-200 mt-6'></div>
      <Hero5 />
      <div className='w-full border border-gray-200 mt-6'></div>
      <Hero6/>
      <div className='w-full border border-gray-200 mt-6'></div>
      <Hero7/>
    </div>
  )
}

export default page