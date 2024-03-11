import React, { useEffect, useState } from 'react'

function Ready() {
  const [rotate, setRoatate] = useState(0)
    
    useEffect(()=>{
      window.addEventListener("mousemove", (e)=>{
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        
        let deltaX = mouseX - window.innerWidth/2;
        let deltaY = mouseY - window.innerHeight/2;

        var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
        setRoatate(angle-180);
        
      })
    })
  return (
    <div  data-scroll
    data-scroll-option
    data-scroll-speed="-.1" className=' w-full py-48 bg-[#CDEA68] flex items-center justify-center relative '>
        
            <h1 className=' font-["founders"] uppercase  text-[17vw]  tracking-tight  mt-4  text-center  leading-[11vw] text-[#212121]'>ready <br /> to start <br /> the projects?</h1>
            
             <div className=' absolute  top-[40vw] '>
               <div className='flex items-center justify-center  mt-28'> 
                  <button className=' px-4 py-4  ml-14 uppercase bg-zinc-800 text-white rounded-full flex items-center gap-10 hover:bg-[#000] transition-all ease-in duration-75'>start the projects
                  <div className=' h-2 w-2 rounded-full bg-white'></div>
                 </button>
               </div> 
               <h1 className=' text-center uppercase font-["mont"] mt-2 ml-10'>or</h1>
               <div className='flex items-center justify-center  mt-2'> 
                  <button className=' px-4 py-4  ml-14 uppercase  bg-transparent border border-black  text-black rounded-full flex items-center gap-8 hover:bg-[#000] transition-all ease-[cubic-bezier(0,1,1,0)] duration-100 hover:text-white'>hello2@ochi.design
                  <div className=' h-2 w-2 rounded-full bg-black hover:bg-white'></div>
                 </button>
               </div> 

             </div>
             <div data-scroll data-scroll-section data-scroll-speed=".7"  className=' overlay w-full h-full bg-[#23251900] absolute'>
             <div className=' flex items-center  gap-10    absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <div className=' flex items-center justify-center w-[13vw] h-[13vw] bg-slate-100 rounded-full'>
                    <div className=' w-2/3 h-2/3  relative  bg-[#212121] rounded-full'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line  w-full h-7  rotate-3 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                        <div className='h-6 w-6 bg-zinc-100 rounded-full'></div>
                        </div>
                        
                    </div>
                </div>
                <div className=' w-[13vw] h-[13vw] flex items-center justify-center bg-slate-100 rounded-full'>
                    <div className=' w-2/3 h-2/3 relative bg-[#212121] rounded-full'>
                    <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className='line  w-full h-7 rotate-3 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                        <div className='h-6 w-6 bg-zinc-100 rounded-full'></div>
                        </div>
                    </div>
                </div>
            </div>
             </div>
        
    </div>
  )
}

export default Ready