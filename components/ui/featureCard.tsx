"use client";

import { MagicCard } from "../magicui/magic-card";
import { Roboto_Mono } from "next/font/google";

const font = Roboto_Mono({
    subsets: ["latin"],
    weight: "400"
})



export function FeatureCard({title, icon, description}: {title: string, description: string, icon: React.ReactNode}) {
  
  return (
    
        <div className={`max-w-sm p-3 ${font.className} rounded-xl`}>
            <MagicCard gradientColor="#D9D9D955" className="p-0">
        <div className="flex flex-col gap-8 p-6 border border-gray-500/30 rounded-xl bg-white/5 backdrop-blur-xl shadow-sm">
            
            {/* Title + Icon */}
            <div className="flex items-center justify-between w-full">
            <h1 className="text-xl font-medium text-gray-200">{title}</h1>
            {icon}
            </div>

            <div className="w-full h-px bg-gray-700/50"></div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
            {description}
            </p>
        </div>
        </MagicCard>
        </div>
    

  );
}
