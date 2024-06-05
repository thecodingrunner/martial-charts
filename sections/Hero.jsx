"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "@/utils/motion";

// import deviceOnWrist from '../public/deviceOnWristEdit.jpg'
// import maleFighter1 from '../public/maleFighter1.jpg'
// import deviceOnSurface from '../public/deviceOnSurfaceEdit.jpg'
import boxerSide3 from '../public/boxerSide1.jpg'


const Hero = () => {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5])
  const borderRadius = useTransform(scrollYProgress, [0, 1], [0, 250])

  return (
    <section className="text-white z-0 h-auto w-[80vw] mx-auto relative">
      <div className='gradient-02 absolute top-0 left-0' />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto flex flex-col h-auto z-0"
      >
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center z-10 mb-24 mt-14">
          <motion.h1 variants={textVariant(0.2)} className="font-orbitron text-6xl font-semibold">
            Martial Charts
          </motion.h1>
          <motion.h1 variants={textVariant(0.2)} className="font-orbitron text-2xl font-semibold text-[#b72f3e]">
            Gamified Performance Optimisation
          </motion.h1>
        </div>

        <motion.div variants={slideIn('up', 'tween', 0.2, 1.5)}>
          <motion.div style={{ 
            scale, 
            borderRadius
          }} className="overflow-hidden" >
            <div className="h-full z-0 overflow-hidden">
              <img src={boxerSide3.src} alt="cover" className="object-cover" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
