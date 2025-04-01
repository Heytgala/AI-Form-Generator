"use client"
import React, { useState } from 'react'
import GenerateFormInput from './GenerateFormInput'
import { Button } from './ui/button'

type SuggestionText = {
  label:string,
  text: string
}  

const suggestionbutton: SuggestionText[] = [
  {
    label: "Job Application",
    text: "Develop a basic job application form that serve as one-page solution form collecting essential information from applicants."
  },
  {
    label: "Registration Form",
    text: "Create a course registration form suitable for any school or institution for collecting essential information from applicants."
  },
  {
    label: "Feedback Form",
    text: "Create a client feedback form to gather valuable insights from any clients."
  },
]

type Props = {
  totalforms: number,
  isSubscribed: boolean
}

const HeroSection : React.FC<Props> = ({totalforms,isSubscribed}) => {
  const[text,setText] = useState<string>("");
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
        <GenerateFormInput text={text} totalforms ={totalforms} isSubscribed ={isSubscribed}/>
        <div className='grid grid-cols-4 gap-3'>
          
          {
            suggestionbutton.map((item:SuggestionText,index:number)=>(
              <Button onClick={()=>setText(item.text)} key={index} className='rounded-full h-10' variant={'outline'}>{item.label}</Button>
            ))
          }
        </div>
        
    </section>
  )
}

export default HeroSection
