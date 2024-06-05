"use client"

import { slideIn, staggerContainer } from "@/utils/motion"
import { motion } from "framer-motion"

const SignIn = () => {
  return (
    <section className="relative">
      <div className='gradient-02 absolute top-0 left-0' />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto flex flex-col h-auto z-0"
      >
        <motion.div variants={slideIn('up', 'tween', 0.2, 1.5)} className='w-[80vw] md:h-[60vh] h-auto rounded-[2rem] mx-auto overflow-hidden relative flex items-center justify-center md:items-start my-15'>
          <img src='/workoutImg.jpg' className='object-contain' />
          <div className='bg-opacity-40 bg-black absolute top-0 left-0 h-full w-full' />
          <div className='absolute my-auto md:mt-[25vh] flex flex-col items-center gap-6 justify-center'>
            <h1 className='text-4xl text-center font-semibold'>Sign in to start your workout</h1>
            <button className='px-4 py-3 rounded-full bg-[#b72f3e]'>Sign In</button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default SignIn