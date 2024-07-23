'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const layout = ({children} : {children: React.ReactNode}) => {
  const [searchInput, setSearchInput] = useState<string>('')
  
  return (
    <>
    SideBar
    {children}
    {/* <div className='ml-[280px] absolute'>{children}</div>
    <div className='w-[280px] h-full bg-white block text-black p-[24px] border-r border-solid border-gray-300'>
      <nav >
        <div >
          <Link href={'./'} className='flex items-center '>
            <Image src={'/Group.svg'} alt='logo' width={32} height={32} className='mr-2'/>
            <h1 className='text-2xl text-[#00214F] font-[700] s-[28]'>Horizon</h1>
          </Link>
        </div>
        <form className='flex items-center w-full max-w-md mx-auto mb-6 mt-6'>
          <div className='relative w-full'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <Image src='/search-lg.svg' alt='Search icon' width={24} height={24} className='text-gray-800' />
            </div>
            <input 
              type="text" 
              placeholder='Search' 
              className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
          </div>
        </form>
        <ul className='text-xl '>
        <li className='pr-[20px] pb-[20px] pt-[20px]'>
          <Link className='flex items-center gap-3 font-[600] no-underline text-black' href='./'>
            <Image src='/home-2.svg' alt='home' width={32} height={32}/>
            <span>Home</span>
          </Link>
        </li>

        <li className='pr-[20px] pb-[20px] pt-[20px]'>
          <Link className='flex items-center gap-3 font-[600] no-underline text-black' href='./my-banks'>
            <Image src='/dollar-circle.svg' alt='My Banks' width={32} height={32}/>
            <span>My Banks</span>
          </Link>
        </li>

        <li className='pr-[20px] pb-[20px] pt-[20px]'>
          <Link className='flex items-center gap-3 font-[600] no-underline text-black' href='./Transaction-History'>
            <Image src='/receipt-item.svg' alt='Transaction History' width={32} height={32}/>
            <span>Transaction History</span>
          </Link>
        </li>

        <li className='pr-[20px] pb-[20px] pt-[20px]'>
          <Link className='flex items-center gap-3 font-[600] no-underline text-black' href='./Payment-Transfer'>
            <Image src='/money-send.svg' alt='Payment Transfer' width={32} height={32}/>
            <span>Payment Transfer</span>
          </Link>
        </li>
        </ul>
      </nav>
    </div> */}
    </>
  )
}

export default layout