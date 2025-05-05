"use client"

import { ArrowRight } from 'lucide-react'
import { Roboto_Mono } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {AnimatePresence, motion} from "framer-motion";


const navLinks = [
    {
        name: "Work",
        link: "/work"
    },
    {
        name: "About us",
        link: "/about-us"
    },
    {
        name: "Pricing",
        link: "/pricing"
    },
    {
        name: "Contact",
        link: "/contact"
    }
]

const Robotomono = Roboto_Mono({
    subsets: ["latin"],
    weight: "300"
})

const Navbar = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 10) {
            setIsScrolled(true)
        
        
        } else {
        setIsScrolled(false);
        }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    }, [isScrolled]);
  return (
    
    <AnimatePresence>
         
        
        
    <motion.nav initial={{ top: 10 }}
        animate={{ top: isScrolled ? 0 : 10 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`w-full  z-50 flex justify-center items-center   ${Robotomono.className} ${isScrolled ? "bg-gradient-to-b from-black/30 to-white/10 backdrop-blur-xs" : "bg-transparent"}`}
        style={{ position: "sticky" }}>
            
        <div className='xl:w-2/3 md:p-3 max-sm:p-4  w-full bg-transparent'>
          <div className='flex justify-between items-center bg-transparent'>
            <div className='flex items-center gap-5 '>
                <Image src={"/logo.png"} alt='logo' width={100} height={100}/>
                {isMenuOpen ? }

                <div className='flex items-center gap-10 max-sm:hidden'>
                    {navLinks.map((link, index) => (
                    <Link href={link.link} key={index} className='text-md  tracking-wide text-gray-300 hover:text-white'>
                        {link.name}
                    </Link>
                ))}
                </div>

            </div>
            <div className='flex items-center gap-3'>
            <motion.button
            initial={{ scale: 1 }}
            whileHover={{
                scale: 1.05,
                backgroundColor: '#d1d5db',
                color: '#1f2937',
            }}
            transition={{ type: 'spring', damping: 20 }}
            className='relative isolate inline-flex items-center justify-center text-base/6 uppercase font-mono tracking-widest shrink-0 focus:outline-none data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[disabled]:opacity-50 [&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-0.5 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:sm:my-1 px-4 py-2 sm:text-sm [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:sm:size-4 gap-x-3 bg-[--btn-bg] text-[--btn-text] [--btn-bg:transparent] [--btn-border:theme(colors.primary/25%)] [--btn-text:theme(colors.primary)] [--btn-hover:theme(colors.secondary/20%)] text-center w-auto p-2 rounded-full border-[0.3px] border-gray-400 shadow-none cursor-pointer'
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            layout
            >
            Book a call
            <AnimatePresence>
                {isHovering && (
                <motion.div
                    key="arrow"
                    initial={{ opacity: 0, x: -5, rotate:0 }}
                    animate={{ opacity: 1, x: 0 , rotate: -35}}
                    exit={{ opacity: 0, x: -5 }}
                    transition={{ duration: 0.2 }}
                    
                >
                    <ArrowRight className="w-7 h-6" />
                </motion.div>
                )}
            </AnimatePresence>
            </motion.button>
           
            </div>




            
          </div>
          
        </div>
    </motion.nav>
    </AnimatePresence>
  )
}

export default Navbar