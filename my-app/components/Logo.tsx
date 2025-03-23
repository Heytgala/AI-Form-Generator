import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={"/"}>
        <h1 className='font-extrabold text-2xl'>AI Form Generator</h1>
    </Link>
  )
}

export default Logo
