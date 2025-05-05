import { Roboto_Mono } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision'

const font = Roboto_Mono({
    subsets: ["latin"],
    weight: "400"
})

const Work = () => {

  return (
    <BackgroundBeamsWithCollision>
    <div className={`${font.className} w-[100vw] min-h-screen flex items-center justify-center border-b-[0.2px] border-b-gray-700 py-12 px-4 sm:px-6 lg:px-8`}>
      
        <div className='w-full max-w-6xl h-full flex flex-col lg:flex-row items-center gap-8'>
         
          <div className='w-full lg:w-1/2 flex flex-col justify-center gap-4 sm:gap-6'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl tracking-wide leading-tight'>
              Our Expertise in Creating Impactful Digital Experiences
            </h1>
            <p className='text-xl sm:text-2xl tracking-wide text-gray-300'>
              Thoughtfully built. Purposefully crafted
            </p>
            <p className='text-base sm:text-lg md:text-xl tracking-tight text-gray-400 font-light'>
              At Sol., we focus on creating reliable, elegant digital solutions tailored to each client's unique goals. With a careful balance of design, technology, and strategy, we help ideas take shape and grow. Our approach is collaborative, detail-oriented, and rooted in a commitment to quality — ensuring every product we build is as seamless as it is scalable.
            </p>
          </div>
          
          <div className='w-full lg:w-1/2 relative aspect-square max-lg:max-w-md'>
            <Image 
              src={"/image2.jpg"} 
              alt='Creative work' 
              fill
              className='object-cover rounded-lg'
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 bg-black text-lg tracking-wider'>
              CREATIVE.
            </div>
          </div>
        </div>
      
    </div>
    </BackgroundBeamsWithCollision>
  )
}

export default Work