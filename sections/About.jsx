"use client"

import { motion } from 'framer-motion'
import { fadeIn, navVariants, staggerContainer } from '@/utils/motion'
import { TypingText } from '@/components/CustomTexts'

const About = () => {
  return (
    <section className="relative md:my-40 my-20">
      <div className='gradient-02 z-0' />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className='mx-auto flex flex-col w-3/5 z-10'
      >
        <TypingText title="| About Martial Charts" textStyles="text-center text-2xl text-[#b72f3e]" />

        <motion.p variants={fadeIn("up", "tween", 0.2, 1)} className='mt-3 z-10 sm:text-[36px] text-[20px] text-center'>
          The platform to revolutionise martial arts training. By <span className='font-extrabold'>gamifying workouts</span> and and providing in-depth <span className='font-extrabold'>statistical feedback</span>, Martial Charts allows you to optimise your performance whilst having fun.
        </motion.p>
        {/* StrikeSense Pro */}
      </motion.div>
    </section>
  )
}

export default About