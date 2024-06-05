"use client"

import { slideIn, staggerContainer } from "@/utils/motion"
import { motion } from "framer-motion"

const Purchase = () => {
  return (
    <section className="relative">
        <div className='gradient-02 absolute top-0 right-0 z-0' />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto flex flex-col h-auto z-10"
        >
          <motion.div variants={slideIn('up', 'tween', 0.2, 1.5)} className='w-[80vw] md:h-[60vh] h-auto rounded-[2rem] mx-auto overflow-hidden relative flex justify-center items-center my-20 z-10'>
            <img src='/deviceOnSurface.jpg' className='object-cover' />
            <div className='bg-opacity-30 bg-black absolute top-0 left-0 h-full w-full' />
            <div className='absolute my-auto flex flex-col items-center gap-6 justify-center'>
              <h1 className='text-4xl font-semibold text-center'>Want to join the tribe?</h1>
              <button className='px-4 py-3 rounded-full bg-[#b72f3e]'>Purchase Now</button>
            </div>
          </motion.div>
        </motion.div>
    </section>
  )
}

export default Purchase