import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Pricing from '@/components/Pricing'
import React from 'react'

const HomePage = () => {
  return (
    <div className='grid items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20'>
      <HeroSection/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default HomePage
