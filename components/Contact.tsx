'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Roboto_Mono } from 'next/font/google'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

const font = Roboto_Mono({
  subsets: ['latin'],
  weight: '400',
})

const Contact = () => {
  return (
    <div id='contact' className={`${font.className} relative min-h-screen flex items-center justify-center bg-[#0a0a0a] px-4 py-20 overflow-hidden`}>
      {/* Aurora Blur Glow */}
     <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 0.4, x: 0 }}
      transition={{ duration: 2, ease: 'easeOut' }}
      className="absolute left-[-200px] top-1/3 w-[500px] h-[600px] z-0 rotate-[25deg] bg-gradient-to-br from-yellow-300 via-yellow-100/10 to-transparent opacity-20 blur-2xl"
    ></motion.div>
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 0.4, x: 0 }}
      transition={{ duration: 2, ease: 'easeOut' }}
      className="absolute right-0 top-1/3 w-[500px] h-[600px] z-0 rotate-[85deg] bg-gradient-to-br from-yellow-300 via-yellow-100/10 to-transparent opacity-20 blur-2xl"
    ></motion.div>


      <div className="w-full max-w-2xl z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl text-center font-semibold text-yellow-100 mb-12"
        >
          {"Let's Connect"}
        </motion.h2>

        <form className="space-y-8">
          {['Your Name', 'Your Email', 'Your Message'].map((label, i) => (
            <motion.div
              key={label}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={i}
              className="bg-[#111111] border border-yellow-100/20 rounded-xl p-6 shadow-md backdrop-blur-md"
            >
              <label className="block text-sm text-gray-400 mb-2">{label}</label>
              {label === 'Your Message' ? (
                <textarea
                  rows={5}
                  className="w-full bg-transparent border border-yellow-100/20 rounded-md px-4 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-yellow-200"
                  placeholder="Write something meaningful..."
                />
              ) : (
                <input
                  type={label === 'Your Email' ? 'email' : 'text'}
                  placeholder={label}
                  className="w-full bg-transparent border border-yellow-100/20 rounded-md px-4 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-yellow-200"
                />
              )}
            </motion.div>
          ))}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex justify-center"
          >
            <button
              type="submit"
              className="bg-yellow-100/10 border border-yellow-100/20 text-yellow-100 font-semibold px-6 py-3 rounded-full hover:bg-yellow-100/20 transition duration-300"
            >
              Send Message
            </button>
          </motion.div>
        </form>
      </div>
    </div>
  )
}

export default Contact
