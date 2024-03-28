import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className=' w-full py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>
        
            <h1 className=' font-["mont"] text-5xl w-[78vw] ml-12 text-[#454C30]'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
            <div className=' w-full h-[.1vw] bg-[#454c3073] mt-14'></div>
            <div className=' flex '>
                <h3 className=' font-["mont"] ml-12 pt-4 text-[1.2vw] text-[#454C30] '>What you can expect:</h3>
                <div className='ml-[40vw] pt-4'>
                    <p className=' font-["mont"] w-[22vw] text-[1.2vw]  text-[#454C30]'>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
                    <p className=' font-["mont"] w-[20vw]  mt-10 text-[1.2vw] text-[#454C30]'>  We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
                    </div>
               
            </div>
            <div className='  list-none ml-[85vw] -mt-40 font-["mont"] text-[{#454C30}]'>
                 <li>S:</li>
                  <li ><a href="">instagram</a></li>  
                  <li><a href="">behannce</a></li>  
                  <li><a href="">facebook</a></li>  
                   <li><a href="">linkedin</a></li> 
                </div>
            <div className=' w-full h-[.1vw] bg-[#454c3073] mt-44'></div> 
         {/* second  */}
         <div className='w-full py-18 bg-[#CDEA68] flex'>
         <div className=' w-1/2'>
            <h1 className='font-["mont"] text-5xl ml-14 mt-10'>Our approach:</h1>
            <button className=' px-7 py-4 mt-6 ml-14 uppercase bg-zinc-950 text-white rounded-full flex items-center gap-6'>read more
            <div className=' h-2 w-2 rounded-full bg-white'></div>
            </button>
            </div> 
            <div className=' w-1/2 h-[70vh] mr-5 rounded-lg bg-[#454C30] mt-10 overflow-hidden'>
            <img className=' w-full h-full object-cover' src="./public/images/ochi1.jpg" alt="" />
            </div>  
         </div>
          
            
    </div>
  )
}

export default About