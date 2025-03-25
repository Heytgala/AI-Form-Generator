"use client"
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useFormStatus } from 'react-dom'
import { Sparkle, Sparkles } from 'lucide-react'

const GenerateFormInput = () => {
  return (
    <form className='flex items-center gap-4 my-8'>
      <Input placeholder="Write to prompt to generate 'Form' ....."></Input>
      <SubmitButton/>     
    </form>
  )
}

export default GenerateFormInput

 
const SubmitButton = () =>{
  const{pending} = useFormStatus();
  return(
    <Button className='h-12 bg-gradient-to-r from-blue-500 to bg-purple-600'>
      <Sparkles className='mr-2'/>
      {
        pending?(
          <span>Generating Form .....</span>
        ) : (
          "Generate Form"
        )
      }
      </Button>
  )
} 