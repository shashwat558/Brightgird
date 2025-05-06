import { Roboto_Mono } from 'next/font/google';
import React from 'react';

type PricingType = {
  title: string;
  price: string;
  frequency: string;
  description: string;
  features: string[];
  highlighted: boolean;
};

const font = Roboto_Mono({
  subsets: ['latin'],
  weight: '400',
});

const PricingCard = ({ pricingDetails }: { pricingDetails: PricingType }) => {
  return (
    <div id='#pricing'
      className={`
        w-full  xl:max-w-md max-w-[450px] h-[500px] p-6 rounded-2xl border border-white/10 backdrop-blur-xl
        bg-gradient-to-br from-yellow-100/10 via-white/5 to-transparent
        ${
          pricingDetails.highlighted
            ? 'border-yellow-300/30'
            : 'border-white/10'
        }
        transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl 
        ${font.className}
      `}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-wide text-white">{pricingDetails.title}</h2>
          <p className="text-5xl font-bold text-yellow-400 mt-4">
            {pricingDetails.price}
            <span className="text-base font-normal text-gray-300"> {pricingDetails.frequency}</span>
          </p>
          <p className="text-gray-300 mt-3 text-sm px-2">{pricingDetails.description}</p>
        </div>

        <ul className="mt-6 space-y-3 text-sm text-gray-100 px-3">
          {pricingDetails.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-yellow-300">✓</span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex justify-center mt-6">
          <button
            className={`px-6 py-2 rounded-lg font-medium text-sm ${
              pricingDetails.highlighted
                ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                : 'bg-white/10 text-white hover:bg-white/20'
            } transition`}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
