'use client';
import { useState } from 'react';
import { ExpandableDiv } from '../../utility/ExpandableDiv';
import { motion, AnimatePresence } from 'framer-motion';
import { BrutalCircleIconTooltip } from '../../utility/BrutalCircleTooltip';
import { MdVideocam, MdCancel, MdArrowDropDown } from 'react-icons/md';
import ReactPlayer from 'react-player';

interface CourseTableItemProps {
  course: {
    altLink: string | null;
    categoryArray: string[];
    courseId: string;
    hours: string | null;
    id: string;
    lessons: string | null;
    link: string;
    objectives: string[];
    preview: string;
    price: string;
    seoImage: string;
    slug: string;
    stripeLink: string | null;
    subheadline: string;
    title: string;
    videos: string | null;
    what_learned: string;
  };
}

export const CourseTableItem: React.FC<CourseTableItemProps> = ({ course }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const setColorByCategory = (catArray: string) => {
    switch (catArray) {
      case 'MATERIALS':
        return 'bg-base-brand';
      case 'INDUSTRY':
        return 'bg-brand-yellow';
      case 'DESIGN':
        return 'bg-clemson';
      case 'FOODANDBEVERAGE':
        return 'bg-brand-red';
      case 'AUTO':
        return 'bg-indigo-500';
      case 'SUPPLYCHAIN':
        return 'bg-clemson-dark';
      case 'BUSINESS':
        return 'bg-green-600';
      default:
        return 'bg-clemson';
    }
  };

  const setCategoryText = (cat: string) => {
    switch (cat) {
      case 'Materials':
        return 'Materials';
      case 'MATERIALS':
        return 'Materials';
      case 'Industry':
        return 'Industry';
      case 'INDUSTRY':
        return 'Industry';
      case 'Design':
        return 'Design';
      case 'DESIGN':
        return 'Design';
      case 'FOODANDBEVERAGE':
        return 'Food & Bev';
      case 'Food & Beverage':
        return 'Food & Bev';
      case 'Supply Chain & Logistics':
        return 'Supply Chain & Logistics';
      case 'SUPPLYCHAIN':
        return 'Supply Chain & Logistics';
      case 'Business':
        return 'Business';
      case 'BUSINESS':
        return 'Business';
      case 'AUTO':
        return 'Automotive';
    }
  };

  return (
    <div
      className={`w-full max-w-7xl border-2 border-black ${setColorByCategory(
        course.categoryArray[0]
      )} bg-opacity-20 relative group hover:bg-opacity-40 transition-all ease-in`}
    >
      {/* VIDEO PLAYER */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            className='fixed w-screen h-screen inset-0 bg-black z-50 flex items-center justify-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut' }}
          >
            <div className='w-full mx-auto max-w-7xl flex flex-col gap-5'>
              <div className='w-full aspect-[16/9]'>
                <ReactPlayer
                  url={course.preview}
                  light={false}
                  playing={true}
                  width={'100%'}
                  height={'100%'}
                />
              </div>
              <div
                className='flex items-center justify-center gap-1 cursor-pointer'
                onClick={() => setIsPlaying(false)}
              >
                <div>
                  <MdCancel size={18} color='white' />
                </div>
                <div className='text-white font-semibold text-center text-lg'>
                  Close
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DESKTOP */}
      {/* MAIN */}

      <div className='hidden lg:grid lg:grid-cols-12 items-center gap-3 divide-x-black w-full px-2 py-2 min-h-[90px]'>
        <div className='col-span-4 pl-2 content-center cursor-pointer'>
          <div className='grid grid-cols-4'>
            <div className='col-span-1 text-xs content-center'>
              {course.courseId}
            </div>
            <div className='col-span-3 flex flex-col'>
              <div className='text-lg font-semibold'>{course.title}</div>
              <div className='flex items-center'>
                {course.categoryArray.map((cat, i) => (
                  <div
                    className='flex items-center pl-0.5 pr-0.5 first:pl-0'
                    key={cat}
                  >
                    <div className='text-xs font-semibold leading-tight text-neutral-500 '>
                      {setCategoryText(cat)}
                    </div>
                    {course.categoryArray.length > 1 && i === 0 ? (
                      <div className='text-xs text-neutral-500'>&nbsp;/ </div>
                    ) : (
                      <></>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-1 content-center cursor-pointer'>
          <div className='font-semibold text-sm'>
            {course.price === 'FREE' ? 'Free' : '$' + course.price}
          </div>
        </div>
        <div className='flex items-center gap-2 col-span-5 '>
          <ExpandableDiv
            content={course.subheadline}
            textColor='text-neutral-900'
            height={90}
          />
        </div>

        <div className='col-span-2 content-center cursor-pointer'>
          <div className='grid grid-cols-3 w-full gap-3 text-center text-sm'>
            <div className='font-bold content-center'>{course.hours}</div>
            <div className='font-bold content-center'>{course.lessons}</div>
            {course.preview ? (
              <div className='content-center mx-auto'>
                <BrutalCircleIconTooltip
                  tooltip={'Preview'}
                  bgColor={'bg-white'}
                  fn={() => setIsPlaying(!isPlaying)}
                >
                  <MdVideocam color='black' size={24} />
                </BrutalCircleIconTooltip>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE */}
      {/* MAIN */}
      <div className='flex flex-col lg:hidden'>
        <div className='grid grid-cols-6 min-h-[68px] content-center'>
          <div className='col-span-1 text-xs content-center px-1'>
            {course.courseId}
          </div>
          <div className='col-span-3 flex flex-col gap-0 py-1.5 content-center'>
            <div className='flex flex-col'>
              {course.categoryArray.map((cat) => (
                <div
                  className='flex items-center pl-0.5 pr-0.5 first:pl-0'
                  key={cat}
                >
                  <div className='text-xs font-semibold leading-tight text-neutral-500 px-1'>
                    {setCategoryText(cat)}
                  </div>
                </div>
              ))}
            </div>
            <div className='font-semibold tracking-[-0.01em] leading-tight px-1 text-sm md:text-base pr-6'>
              {course.title}
            </div>
          </div>
          <div className='grid grid-cols-3 col-span-2 w-full content-center'>
            <div className='text-xs font-medium col-span-1'>{course.hours}</div>
            <div className='text-xs font-medium col-span-1'>
              {course.lessons}
            </div>
            <div className='text-xs font-medium col-span-1'>
              ${course.price}
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div>
              <div className='border-y-2 border-y-black bg-white p-2.5'>
                <div className='text-sm leading-tight'>
                  {course.subheadline}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* INFO BAR */}
        <div
          className={`w-full ${setColorByCategory(course.categoryArray[0])}`}
        >
          <div className='w-full flex justify-between items-center'>
            <div className='grid grid-cols-3 w-fit gap-5 content-center'>
              <div className='w-6 h-full border-r-2 border-t-2 border-black bg-white flex items-center justify-center'>
                <div
                  className={`${isOpen ? 'rotate-180' : 'rotate-0'}`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <MdArrowDropDown size={20} />
                </div>
              </div>
              <div className='text-sm text-white font-semibold content-center py-1'>
                {course.price === 'FREE' ? 'FREE' : `$${course.price}`}
              </div>
            </div>
            <div className='flex items-center gap-5 mr-3'>
              {course.preview ? (
                <div
                  className='text-sm text-white/80 font-semibold text-right cursor-pointer'
                  onClick={() => {
                    setIsPlaying(true);
                  }}
                >
                  Preview
                </div>
              ) : (
                <></>
              )}

              <div className='text-sm text-white font-semibold text-right cursor-pointer'>
                View More
              </div>
            </div>
          </div>
        </div>
        {/* INFO */}
      </div>
    </div>
  );
};
