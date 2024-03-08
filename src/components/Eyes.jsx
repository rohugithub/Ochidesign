// eslint-disable-next-line no-unused-vars
import React, { useEffect , useState} from 'react';

function Eyes() {
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
    <div className=' w-full h-screen  overflow-hidden '>
        <div  data-scroll data-scroll-speed="-.8" className=' relative w-full h-full bg-cover bg-center  bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
            <div className=' flex items-center  gap-10    absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <div className=' flex items-center justify-center w-[15vw] h-[15vw] bg-slate-100 rounded-full'>
                    <div className=' w-2/3 h-2/3  relative  bg-[#212121] rounded-full'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line  w-full h-7  rotate-3 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                        <div className='h-6 w-6 bg-zinc-100 rounded-full'></div>
                        </div>
                        
                    </div>
                </div>
                <div className=' w-[15vw] h-[15vw] flex items-center justify-center bg-slate-100 rounded-full'>
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

export default Eyes