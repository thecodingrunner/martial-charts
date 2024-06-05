"use client"

import { motion } from 'framer-motion'
import { navVariants } from '@/utils/motion'

const Navbar = () => {
  return (
    <motion.nav variants={navVariants} initial="hidden" animate="show" className='bg-transparent z-40'>
      <div className='py-10 px-20 flex items-center justify-between bg-transparent text-white z-20'>
        <div className='h-36 w-36 rounded-full overflow-hidden relative'>
          <img src='/logoNoBg.png' className='object-contain absolute' />
          <div className='text-lg font-extrabold absolute w-full text-center h-full pt-[35%] text-[#b72f3e]'>Martial Charts</div>
        </div>
        <div className='hidden md:flex gap-10 items-center'>
          <div>How it works</div>
          <div>Start workout</div>
          <button className='p-3 rounded-full bg-[#b72f3e] text-white'>Sign In</button>
        </div>
        <div className='flex items-center gap-2 md:hidden'>
          <span>Menu</span>
          <div className='rounded-full border border-white bg-transparent text-white p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar