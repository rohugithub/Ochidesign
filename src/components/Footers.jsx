// eslint-disable-next-line no-unused-vars
import React from 'react'

function Footers() {
  return (
    <div   className=' w-full min-h-screen flex '>
        <div className=' w-[50vw] h-full '>
            <h1 className=' font-["founders"] text-[10vw] uppercase w-10  leading-[7.5vw]  mt-28 ml-20 text-[#232519e5]'>eye-opening</h1>
        </div>
        <div className=' w-[50vw] h-full  relative'>
           <h1 className=' font-["founders"] text-[9vw] uppercase text-[#232519e5] mt-14'>presentations</h1>
           <div className=' font-["mont"] capitalize -mt-10 text-[#232519e5]'>
            <ul>S:</ul>
            <ul>instagram</ul>
            <ul>facebool</ul>
            <ul>linkedin</ul>
            <ul>behance</ul>
           </div>
           <div className=' font-["mont"] mt-10 text-[#232519e5]'>
                <ul>L:</ul>
                <p className=' w-44 '>202-1965 W 4th Ave Vancouver, Canada</p>
                <p className=' w-32 mt-4'>30 Chukarina StL viv, Ukraine</p>
           </div>
           <div className=' font-["mont"] mt-10 text-[#232519e5]'>
                <ul>E:</ul>
                <p className=' w-44 '>hello@ochi.design</p>   
           </div>
           <div className=' h-[40vh] w-1/4   absolute left-[33vw] top-[26vw] capitalize text-[#232519e5] font-["mont"]'>
           <ul>M:</ul>
            <ul><a href=""></a>home</ul>
            <ul>service</ul>
            <ul>our work</ul>
            <ul>about us</ul>
            <ul>insight</ul>
            <ul>contact us</ul>

           </div>
        </div>
       
    </div>
  )
}

export default Footers