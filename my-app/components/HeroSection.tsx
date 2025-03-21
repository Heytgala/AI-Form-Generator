import React from 'react'
import GenerateFormInput from './GenerateFormInput'

const HeroSection = () => {
  return (
    <section>
      <div className='relative'>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-2xl opacity-50 -z-10'></div>
        <div className='container text-center relative'>
              <h1 className='text-4xl font-bold'>Build AI Driven Form 🚀</h1>
              <p>Leverage the "Power of AI" to create responsive and dynamic "Forms"</p>
          </div>
        </div>
        {/** Form Input */}  
        <GenerateFormInput/>
    </section>
  )
}

export default HeroSection
