"use client"

import { Roboto_Mono } from 'next/font/google'
import React from 'react'

import { Particles } from './magicui/particles'


import {motion} from "framer-motion";


const font = Roboto_Mono({
    subsets: ["latin"],
    weight: "400"
})

const Hero = () => {
  return (
    <div className="relative w-full h-[100vh] flex pt-0 border-b-[0.5px] border-gray-800">
        
      
      
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[80%] h-[160px] bg-gradient-to-b from-yellow-400/80 via-white/30 to-transparent blur-[160px] rounded-full pointer-events-none opacity-90 z-[-10]" style={{
        animation: "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite "
      }}></div>

       
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[65%] h-[140px] bg-gradient-to-b from-yellow-300/70 via-white/20 to-transparent blur-[150px] rounded-full pointer-events-none opacity-80 z-[-10]" style={{
        animation: "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite "
      }}></div>

        
        <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[50%] h-[120px] bg-gradient-to-b from-yellow-200/60 via-white/20 to-transparent blur-[140px] rounded-full pointer-events-none opacity-70 z-[-10]" style={{
        animation: "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite "
      }}></div>

        
        <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-[35%] h-[100px] bg-gradient-to-b from-yellow-100/50 via-white/20 to-transparent blur-[130px] rounded-full pointer-events-none opacity-60 z-[-10]"></div>

        
        <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-[20%] h-[80px] bg-gradient-to-b from-yellow-50/40 via-white/10 to-transparent blur-[120px] rounded-full pointer-events-none opacity-50 z-[-10]"></div>

      

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[85%] h-[150px] bg-gradient-to-t from-yellow-400/90 via-white/20 to-transparent blur-[140px] rounded-full pointer-events-none animate-pulse opacity-80" style={{
        animation: "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite "
      }}></div>

      <div className="xl:w-2/3 w-full  h-full flex justify-center p-4 z-10 relative overflow-visible ">
      <div className=''>
          <div className=' min-h-[300px] flex flex-col justify-start mt-64 items-center max-sm:mt-40'>
            <div className='shadow-[inset_40px_-52px_17px_136px_rgba(10,10,10,0.5)] p-3 rounded-lg'>
            <motion.h1 
            initial={{
              opacity:0, y:40
            }} 
            animate = {{
              opacity:1, y:0
            }}
            transition={{
              duration: 0.6
            }}
            className={`xl:text-[80px] text-[65px] p-2 max-w-[32pc] leading-20 bg-gradient-to-t from-gray-700 via-gray-400 to-gray-300 bg-clip-text text-transparent ${font.className} `}>
            Elevated by Design
            </motion.h1>

            </div>
            <div className={`text-[18px] p-2 max-w-[32pc] leading-10 bg-gradient-to-t from-gray-700 via-gray-400 to-gray-300 bg-clip-text text-transparent ${font.className} `}>
                <motion.p initial={{
              opacity:0, y:45
            }} 
            animate = {{
              opacity:1, y:0
            }}
            transition={{
              duration: 0.7
            }}>
            Engineered for impact — crafted for the ambitious few.
                </motion.p>
            </div>
            <div>
              <motion.p initial={{
              opacity:0, y:50
            }} 
            animate = {{
              opacity:1, y:0
            }}
            transition={{
              duration: 0.9
            }} className={`text-[18px] p-2 max-w-[32pc] leading-10 bg-gradient-to-t from-gray-700 via-gray-400 to-gray-300 bg-clip-text text-transparent ${font.className} `}>
                Where precision meets purpose — I design and build digital products that not only look great, but perform even better.
                
              </motion.p>
              <motion.button initial={{
              opacity:0, y:60
            }} 
            animate = {{
              opacity:1, y:0
            }}
            transition={{
              duration: 1
            }} className={`w-40 h-[50px] ${font.className} rounded-full hover:backdrop-blur-2xl  text-lg cursor-pointer font-semibold border-[0.4px] border-gray-500 mt-3`} >Know more.
            </motion.button>
            </div>
            </div>                 

            
          
          </div>
          
          

            
          
          </div>
                <Particles  
                  className="absolute inset-0 z-0"
                  quantity={70}
                  ease={80}
                  color={"#ffffff"}
                  refresh/>
    </div>
  )
}

export default Hero
