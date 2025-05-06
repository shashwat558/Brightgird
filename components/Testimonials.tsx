"use client"

import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { Roboto_Mono } from 'next/font/google';
import {motion} from "framer-motion"

const font = Roboto_Mono({
    subsets: ["latin"],
    weight: "400"
})




const Testimonials = () => {
  return (
    <div className="w-full border-b-[0.3px] border-b-gray-700 relative overflow-hidden">
      
      
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute left-[-200px] top-1/3 w-[500px] h-[600px] z-0 rotate-[25deg] bg-gradient-to-br from-yellow-300 via-yellow-100/10 to-transparent opacity-20 blur-2xl pointer-events-none"
      />

      
      <div className={`${font.className} h-[40rem] relative z-10 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center`}>
        <h1 className='text-5xl font-semibold tracking-wider bg-clip-text text-transparent bg-gradient-to-t from-gray-600 via-gray-400 to-gray-200'>
          Testimonials
        </h1>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Testimonials


const testimonials = [
  {
    quote:
      "Working with Sol. was an exceptional experience. Their attention to detail, design thinking, and technical execution exceeded all expectations. Our platform has never looked or performed better.",
    name: "Aarav Mehta",
    title: "CEO, Clarity Finance",
  },
  {
    quote:
      "The team at Sol. brought our vision to life with precision and creativity. They listened deeply and delivered a product that not only met our goals but raised the bar for our industry.",
    name: "Emily Carter",
    title: "Founder, Bloom Wellness",
  },
  {
    quote:
      "Sol. isn't just a tech partner — they're a creative force. Their work helped us scale fast without sacrificing quality. I’d recommend them to anyone serious about product and performance.",
    name: "Luca Moretti",
    title: "CTO, NovaTech",
  },
  {
    quote:
      "From concept to launch, Sol. made the entire process feel seamless. Their strategic insight and elegant execution brought clarity to a very complex problem.",
    name: "Rhea Kapoor",
    title: "Product Manager, Verve Education",
  },
  {
    quote:
      "If you're looking for a digital partner who truly understands product, brand, and business — Sol. is it. Smart, intuitive, and truly collaborative.",
    name: "Jason Lin",
    title: "Head of Growth, Atelier Supply",
  },
];
