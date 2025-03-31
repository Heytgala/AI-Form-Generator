import Pricing from '@/components/Pricing'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

const page = async () => {
  const user = await currentUser();
  return (
    <div>
        <Pricing userId = {user?.id}/>
    </div>
  )
}

export default page