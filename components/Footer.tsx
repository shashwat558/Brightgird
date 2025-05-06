'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Roboto_Mono } from 'next/font/google'
import { Github, Mail, Twitter } from 'lucide-react'


const font = Roboto_Mono({ subsets: ['latin'], weight: '400' })

const socialLinks = [
  { icon: <Github />, url: 'https://github.com/shashwat558' },
  
  { icon: <Twitter />, url: 'https://x.com/shashwatj26' },
  { icon: <Mail />, url: 'mailto:jainshashwat528@gmail.com' },
]

const Footer = () => {
  return (
    <footer className={`${font.className} relative bg-[#0a0a0a] text-yellow-100 border-t border-yellow-100/10 px-6 pt-6`}>
      
     
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.2, x: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute left-[-150px] bottom-0 w-[400px] h-[200px] z-0 rotate-[30deg] bg-gradient-to-br from-yellow-300 via-yellow-100/10 to-transparent blur-2xl pointer-events-none"
      />

     
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex gap-6 text-xl"
        >
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition duration-300"
            >
              {link.icon}
            </a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-sm text-yellow-100/70 text-center"
        >
          © {new Date().getFullYear()} Shashwat. All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}

export default Footer
