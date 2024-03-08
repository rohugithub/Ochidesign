// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import React from 'react'

function Maeque() {
  
  return (
    <div  data-scroll data-scroll-section data-scroll-speed=".1" className=' w-full py-20 rounded-tl-3xl  rounded-tr-3xl  bg-[#004D43]'>
        <div className='text  border-t-[1px] border-b-[1px] border-zinc-300 flex whitespace-nowrap overflow-hidden '>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease:"linear", duration:10}} className='text-[25vw] uppercase font-["founders"] font-semibold leading-none -mb-20 pt-10 text-[#FFFFFF] pr-20 '>we are ochi </motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease:"linear", duration:10}}  className='text-[25vw] uppercase font-["founders"] font-extrabold leading-none -mb-20 pt-10 text-[#FFFFFF] pr-20'>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Maeque