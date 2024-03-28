import React from 'react'


function Card() {
  return (
    <div data-scroll
    data-scroll-option
    data-scroll-speed=".8"  className=' w-full h-screen flex'>
        <div className=' cardcontainer w-1/2 px-5  '>
            <div className=' w-full h-[70vh] bg-[#004D43] rounded-2xl relative '>
                <h1 className=' font-["founders"] text-8xl  font-light text-[#CDEA68] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'> ochi</h1>
                <ul  className=' w-28  absolute  top-[60vh] ml-[4vw] h-8 border-[1px]  border-[#CDEA68] rounded-3xl font-["mont"] text-center'>
                    2019-2024</ul>
            </div>
        </div>
        <div className=' cardcontainer w-1/2 flex gap-4'>
            <div className=' w-1/2 h-[70vh] bg-[#212121] rounded-2xl relative'>
               <img className='object-cover absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]' src="./public/images/logo002.svg" alt="" />
               <div className=' w-44 text-center mt-[60vh] h-7 ml-7 border-[1px] rounded-full border-zinc-100 uppercase font-["mont"] text-sm text-gray-100  text-[400]'>rating 5.0 on clutch</div>
            </div>

            <div className=' w-1/2 h-[70vh] bg-[#212121] rounded-2xl relative '>
            <img className=' w-[9.2vw] h-[20vh]  object-cover absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]' src="./public/images/logo003.png" alt="" />
            <div className=' w-56 text-center mt-[60vh] h-7 ml-7 border-[1px] rounded-full border-zinc-100 uppercase font-["mont"] text-sm text-gray-100  text-[400]'>business bootcamp alumini</div>
            </div>
        </div>
    </div>
  )
}

export default Card