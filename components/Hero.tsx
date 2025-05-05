import { Roboto_Mono } from 'next/font/google'
import React from 'react'

const font = Roboto_Mono({
    subsets: ["latin"],
    weight: "600"
})

const Hero = () => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      
      
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[80%] h-[160px] bg-gradient-to-b from-yellow-400/80 via-white/30 to-transparent blur-[160px] rounded-full pointer-events-none opacity-90 z-[-10]"></div>

       
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[65%] h-[140px] bg-gradient-to-b from-yellow-300/70 via-white/20 to-transparent blur-[150px] rounded-full pointer-events-none opacity-80 z-[-10]"></div>

        
        <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[50%] h-[120px] bg-gradient-to-b from-yellow-200/60 via-white/20 to-transparent blur-[140px] rounded-full pointer-events-none opacity-70 z-[-10]"></div>

        
        <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-[35%] h-[100px] bg-gradient-to-b from-yellow-100/50 via-white/20 to-transparent blur-[130px] rounded-full pointer-events-none opacity-60 z-[-10]"></div>

        
        <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-[20%] h-[80px] bg-gradient-to-b from-yellow-50/40 via-white/10 to-transparent blur-[120px] rounded-full pointer-events-none opacity-50 z-[-10]"></div>

      

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[900px] h-[700px] bg-gradient-to-t from-yellow-400/90 via-white/20 to-transparent blur-[140px] rounded-full pointer-events-none animate-pulse opacity-80" style={{
        animation: "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite "
      }}></div>

      <div className="w-2/3 h-full flex justify-center items-center p-3 z-10 relative">
        <h1 className={`text-9xl ${font.className}`}>Bright Edge</h1>
        
      </div>
    </div>
  )
}

export default Hero
