import React from 'react'
import PricingCard from './ui/PricingCard';
import { Roboto_Mono } from 'next/font/google';

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


const Pricing = () => {
  return (
   <div className={`${font.className} w-full min-h-screen flex flex-col gap-10 items-center mt-10 px-4`}>
  <div className="w-full max-w-5xl text-center">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-t from-gray-600 via-gray-400 to-gray-200">
      No Surprises. <br /> Just Value.
    </h1>
  </div>

  <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {pricingPlans.map((plan, index) => (
      <PricingCard key={index} pricingDetails={plan} />
    ))}
  </div>
</div>

  )
}

export default Pricing

