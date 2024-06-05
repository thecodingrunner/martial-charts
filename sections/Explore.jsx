"use client"

import Card from '@/components/Card'
import React from 'react'

import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'

import cardImg1 from '../public/maleFighter1.jpg'
import cardImg2 from '../public/femaleFighter1.jpg'
import cardImg3 from '../public/maleFighter2.jpg'
import cardImg4 from '../public/maleFighter3.jpg'
import cardImg5 from '../public/femaleFighter2.jpg'

const Explore = () => {
  const targetRef = useRef()
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-110%"])

  return ( 
    <section ref={targetRef} className='relative h-[300vh]'>
      <div className='gradient-02 absolute top-0 left-0'/>
      <div className='sticky top-0 h-screen flex items-center overflow-hidden w-[80vw] mx-auto'>
        <motion.div style={{ x }} className='flex gap-8 w-auto'>
          {cards.map((card) => {
            return <Card card={card} key={card.id} />
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Explore


const cards = [
  {
    id: 1,
    title: 'Optimise your performance with real world data',
    img: cardImg1
  },
  {
    id: 2,
    title: 'Enjoy your workouts with a gamified experience',
    img: cardImg2
  },
  {
    id: 3,
    title: 'Improve your punching speed and power',
    img: cardImg3
  },
  {
    id: 4,
    title: 'Achieve your sporting dreams',
    img: cardImg4
  },
  {
    id: 5,
    title: 'Compete globally and climb the rankings',
    img: cardImg5
  },
]