
import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const DarkMode = dynamic(() => import('./DarkMode'), { ssr: false })

function Navbar() {

  return (
    <div className='sticky top-0'>
        <nav className='justify-between p-5 flex md:justify-center gap-[15vw] items-center'>
            <div className=''>
                <h1 className='text-2xl font-[200] heroTxt bg-black text-white' id='navLogo'>
                    <Link href='/'>ArunKumar.me</Link>
                </h1>
            </div>

            <div className='hidden md:block'>
                <ul className='flex md:gap-3 lg:gap-10'>
                    <li className='hover:bg-[#F81CE5] px-3 py-1 hover:text-white rounded-md'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='hover:bg-[#F81CE5] px-3 py-1 hover:text-white rounded-md'>
                        <Link href='/about'>About</Link>
                    </li>
                    <li className='hover:bg-[#F81CE5] px-3 py-1 hover:text-white rounded-md'>
                        <Link href='/'>Skill</Link>
                    </li>
                    <li className='hover:bg-[#F81CE5] px-3 py-1 hover:text-white rounded-md'>
                        <Link href='/'>Contact</Link>
                    </li>
                </ul>
            </div>

            <div className='relative'>
                <DarkMode/>
            </div>
        </nav>
    </div>
  )
}

export default Navbar