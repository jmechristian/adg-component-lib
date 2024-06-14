'use client';
import React, { useState, useRef, useEffect } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import '../../../../src/index.css';

// Define the props type
interface ExpandableDivProps {
  content: string;
  height: number;
  textColor: string;
}

export const ExpandableDiv: React.FC<ExpandableDivProps> = ({
  content = 'The is an H4 Headline.',
  textColor = 'text-black',
  height = 120,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setIsOverflowing(contentRef.current.scrollHeight > height ? true : false);
    }
  }, [content, height]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='col-span-5 content-center flex items-center gap-1'>
      <div
        className={`overflow-hidden content-center ${
          isExpanded ? 'max-h-none' : `'h-[${height}px]'`
        }`}
        style={{ transition: 'max-height 0.3s ease' }}
      >
        <div
          ref={contentRef}
          className={`text-sm ${textColor} ${!isExpanded ? 'line-clamp-6' : ''}`}
        >
          {content}
        </div>
      </div>
      {isOverflowing && (
        <button
          onClick={toggleExpand}
          className={`focus:outline-none transition-all ease-in ${
            isExpanded ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <MdArrowDropDown size={28} color='black' />
        </button>
      )}
    </div>
  );
};
