"use client"
import React from 'react'
import PricingCard from './ui/PricingCard';
import { Roboto_Mono } from 'next/font/google';
import {motion} from "framer-motion";

const font = Roboto_Mono({
  subsets: ['latin'],
  weight: '400',
});

const pricingPlans = [
  {
    title: "Starter",
    price: "$29",
    frequency: "per month",
    description: "Perfect for solo creators and early-stage startups.",
    features: [
      "Up to 3 projects",
      "Basic analytics",
      "Email support",
      "Community access",
    ],
    highlighted: false,
    imgSrc: ""
  },
  {
    title: "Growth",
    price: "$79",
    frequency: "per month",
    description: "Best for growing teams and small businesses.",
    features: [
      "Up to 15 projects",
      "Advanced analytics",
      "Priority support",
      "Team collaboration tools",
    ],
    highlighted: true,
    imgSrc: "/image3.jpg" 
  },
  {
    title: "Enterprise",
    price: "Custom",
    frequency: "",
    description: "Tailored solutions for large organizations.",
    features: [
      "Unlimited projects",
      "Dedicated success manager",
      "Custom integrations",
      "24/7 support",
    ],
    highlighted: false,
    imgSrc: ""
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } }
};

const Pricing = () => {
  return (
   <div className={`${font.className} w-full min-h-[90vh] flex flex-col gap-10 items-center mt-10 px-4 border-b-[0.4px] border-b-gray-800`}>
    
  <div className="w-full max-w-5xl text-center">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-t from-gray-600 via-gray-400 to-gray-200">
      No Surprises. <br /> Just Value.
    </h1>
  </div>
  

  <motion.div variants={containerVariants} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.3 }} className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {pricingPlans.map((plan, index) => (
      <motion.div variants={itemVariants} key={index}>
        <PricingCard pricingDetails={plan} />

      </motion.div>
      
    ))}
  </motion.div>
</div>

  )
}

export default Pricing

