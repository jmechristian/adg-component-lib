'use client';
import React, { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../../styles.css';
// Define the props type
interface BrutalCircleIconTooltipProps {
  children: ReactNode;
  tooltip: string;
  bgColor: string;
  bottom?: boolean;
  fn: () => void;
  pulse?: boolean;
}

export const BrutalCircleIconTooltip: React.FC<
  BrutalCircleIconTooltipProps
> = ({ children, tooltip, bgColor, fn, bottom, pulse }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${bgColor} relative cursor-pointer w-10 h-10 border-2 border-black rounded-full transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 shadow-[2px_2px_0px_black] hover:shadow-[4px_4px_0px_black] flex items-center justify-center ${pulse ? 'animate-pulse' : ''}`}
      onClick={fn}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className={`absolute w-fit z-[200] ${bottom ? 'top-full mt-1' : 'bottom-full'} mb-1`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className='text-xs bg-white px-1 border border-black'>
              {tooltip}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};
