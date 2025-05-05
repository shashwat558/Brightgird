"use client"
import { ChartColumnBig, DraftingCompass, Layers, Star, TrendingUp, UserSearch } from 'lucide-react';
import { Roboto_Mono } from 'next/font/google';
import React from 'react'
import { FeatureCard } from './ui/featureCard';
import { motion } from "framer-motion";
import { LampContainer } from './ui/lamp';

const features = [
  {
    name: "Premium Designs",
    description: "Tailored aesthetics built to elevate your brand identity with timeless elegance.",
    icon: <Star className='w-8 h-8'/>
  },
  {
    name: "Absolute Craftsmanship",
    description: "Every pixel and detail is refined with obsessive attention for a flawless finish.",
    icon: <DraftingCompass className='h-4 w-4'/>
  },
  {
    name: "Performance First",
    description: "Optimized for speed, accessibility, and responsiveness across all devices.",
    icon: <Layers className='h-8 w-8'/>
  },
  {
    name: "Scalable Architecture",
    description: "Engineered to grow with your needs—built on modern, modular foundations.",
    icon: <TrendingUp className='w-8 h-8'/>
  },
  {
    name: "End-to-End Support",
    description: "From ideation to launch and beyond, we’re with you every step of the journey.",
    icon: <UserSearch className='w-8 h-8'/>
  },
  {
    name: "SEO & Analytics Ready",
    description: "Built with best practices to help you get discovered and understand user behavior.",
    icon: <ChartColumnBig className='w-8 h-8'/>
  }
];

const font = Roboto_Mono({
  subsets: ["latin"],
  weight: "400"
})

const Features = () => {
  return (
    <div className="w-full min-h-screen py-10 px-4 sm:px-6 lg:px-8 flex justify-center items-center border-b border-gray-800">
      <div className="max-w-7xl w-full flex flex-col items-center">
        <div className="text-center">
          <h1 className={`${font.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold bg-gradient-to-t from-gray-700 via-gray-500 to-gray-300 bg-clip-text text-transparent mt-4`}>
            What sets us apart
          </h1>
        </div>

        <LampContainer>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full mt-20 px-2 sm:px-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <FeatureCard
                  title={feature.name}
                  description={feature.description}
                  icon={feature.icon}
                />
              </motion.div>
            ))}
          </div>
        </LampContainer>
      </div>
    </div>
  )
}

export default Features;
