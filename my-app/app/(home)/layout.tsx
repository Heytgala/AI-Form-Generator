import { DarkMode } from '@/components/DarkMode'
import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
        <div className='border-b'>
          {/* NavBar */}
            <nav className='flex items-center justify-between max-w-7xl mx-auto py-2'>
                <Logo/>
                <div className='flex items-center gap-2'>
                    <Link href={"/dashboard/analytics"}>
                      {" "}
                      <Button variant={"link"}>Dashboard</Button>
                    </Link>
                    <UserButton/>
                    <DarkMode/>
                </div>
            </nav>
        </div>
      {children}
    </div>
  )
}

export default Layout
