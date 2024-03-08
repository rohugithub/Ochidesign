// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

function LandingPage() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className=' h-screen w-full'>
        <div className='textstructure'>
            <div className='masker pt-1'>
                <h1 className='uppercase text-9xl font-["founders"] font-bold tracking-normal mt-[25vh] ml-16 text-[#212121]'>we create</h1>
            </div>
            <div className='masker pt-1 relative '>
                 <motion.div initial={{width:0}} animate={{width:"10vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1}} className=' w-[10vw] h-[6.5vw] absolute -top-9 left-16 rounded-xl overflow-hidden'>
                  <img className=' w-full h-full object-cover'  src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                 </motion.div>
                <h1 className='uppercase text-9xl font-["founders"] font-bold tracking-normal  ml-56 text-[#212121] leading-[3rem]'>eye-opening</h1>
            </div>
            <div className='masker pt-1'>
              
                <h1 className='uppercase text-9xl font-["founders"] font-bold tracking-normal  ml-16 text-[#212121] leading-[9rem]'>presentations</h1>
            </div>
        </div>
        <div className=' border-t-[1px]  mt-8 border-[#B2B2B2] flex items-center justify-between px-5 py-5 '>
          {["For public and private company", "From the first pitch to IPO"].map((item, index)=>(
            // eslint-disable-next-line react/jsx-key
            <p className=' text-md  tracking-tight leading-none font-["mont"] text-gray-500 font-thin'>{item}</p>
          ))}
           <div className=' start flex gap-1'>
               <div className=' px-3 py-2 border-[1px] rounded-full border-zinc-500 uppercase font-["mont"] text-sm text-gray-500 ml-[15vh]'>start the projects</div>
               <div className=' w-10 h-10 flex items-center justify-center border-[1px] rounded-full border-zinc-500'>
                    <GoArrowUpRight/>   
                </div>
           </div>
           
        </div>
       
    </div>
  )
}

export default LandingPage