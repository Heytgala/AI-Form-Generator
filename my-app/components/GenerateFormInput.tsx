"use client"
import React, { ChangeEvent, useActionState, useEffect, useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useFormStatus } from 'react-dom'
import { Sparkle, Sparkles } from 'lucide-react'
import { generateForm } from '@/actions/generateForm'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

type Initialstate = {
  message: string;
  success: boolean;
  data?:any
}
const initialstate : Initialstate = {
  message:"",
  success: false
}

const GenerateFormInput : React.FC<{text?:string}> = ({text}) => {
  const[description,setDescription]= useState<string | undefined>("");
  const [state,formAction] = useActionState(generateForm,initialstate);
  const router = useRouter();

  const changeEventHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  }

  useEffect(()=>{
    setDescription(text);
  },[text])
  
  useEffect(()=>{
    if(state.success){
      toast(state.message);
      router.push(`/dashboard/forms/edit/${state.data.id}`)
    }
    else if(state.message){
      toast.error(state.message);
    }
  },[router,state])
  return (
    <form  action={formAction} className='flex items-center gap-4 my-8'>
      <Input value={description} onChange={changeEventHandler} type="text" placeholder="Write to prompt to generate 'Form' ....."></Input>
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