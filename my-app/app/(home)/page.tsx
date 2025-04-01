import { getForms } from '@/actions/getForm'
import { getUserSubscription } from '@/actions/userSubscription'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Pricing from '@/components/Pricing'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

const HomePage = async() => {
  const user = await currentUser();
  const forms = await getForms();
  const totalformcreated = forms?.data?.length || 0 as number;
  const isSubscribed = await getUserSubscription(user?.id as string) as boolean;

  return (
    <div className='grid items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20'>
      <HeroSection totalforms = {totalformcreated} isSubscribed = {isSubscribed} />
      <Pricing userId={user?.id}/>
      <Footer/>
    </div>
  )
}

export default HomePage
