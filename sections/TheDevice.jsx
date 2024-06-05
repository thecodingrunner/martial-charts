// "use client";

// import { fadeIn, planetVariants, staggerContainer } from "@/utils/motion";
// import { motion } from "framer-motion";

// import device from '../public/deviceNoBg1.png'
// import { TitleText, TypingText } from "@/components/CustomTexts";

// const TheDevice = () => {
//   return (
//     <section className="w-3/4 mx-auto my-40 relative">
//       <div className='gradient-02 absolute top-0 left-10'/>
//       <motion.div
//         variants={staggerContainer}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: "false", amount: 0.25 }}
//         className="mx-auto flex flex-col lg:flex-row gap-8"
//       >
//         <motion.div variants={planetVariants('left')} className="flex-1 flex justify-center items-center">
//           <img src={device.src} alt="device" className="w-[100%] h-[100%] object-contain" />
//         </motion.div>
//         <motion.div variants={fadeIn('left', 'tween', 0.2, 1)} className="flex-1 flex justify-center flex-col mr-10">
//           <TypingText title="| The Device" textStyles="text-[#b72f3e]" />
//           <p className='mt-3 sm:text-2xl text-xl'>
//             The device to revolutionise martial arts training. By <span className='font-extrabold'>gamifying workouts</span> and and providing in-depth <span className='font-extrabold'>statistical feedback</span>, Martial Charts' StrikeSense Pro allows you to optimise your performance whilst having fun.
//           </p>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default TheDevice;
