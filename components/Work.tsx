import { Roboto_Mono } from 'next/font/google'
import Image from 'next/image'
import React from 'react'


const font = Roboto_Mono({
    subsets: ["latin"],
    weight: "400"
})


const Work = () => {
  return (
    <div className={`${font.className} w-[100vw] h-[70vh] flex justify-center items-center border-b-[0.2px] border-b-gray-700`}>
        <div className='w-2/3 h-full p-5 flex  items-center'>
          <div className='w-[60%] flex flex-col justify-center gap-5'>
            <h1 className='text-[40px] tracking-wide '>
                Our Expertise in Creating Impactful Digital Experiences
            </h1>
            <p className='text-3xl tracking-wide text-gray-300'>Thoughtfully built. Purposefully crafted</p>
            <p className='text-xl tracking-tight text-gray-400 font-light'>
                At Sol., we focus on creating reliable, elegant digital solutions tailored to each client’s unique goals. With a careful balance of design, technology, and strategy, we help ideas take shape and grow. Our approach is collaborative, detail-oriented, and rooted in a commitment to quality — ensuring every product we build is as seamless as it is scalable.
            </p>
          </div>
          <div className='w-[40%] ml-5 relative'>
            <Image  src={"/image2.jpg"} alt='image' width={500} height={500} className='-z-10' />
            <div className='absolute top-[40%] left-[40%] p-2 bg-black text-lg tracking-wider'>CREATIVE.</div>
          </div>
        </div>
    </div>
  )
}

export default Work