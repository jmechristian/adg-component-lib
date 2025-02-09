import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { ImageComponent } from '../ImageComponent';
import { Image } from '../../../defs';

export const SplitRight = ({
  leftImage,
  rightImage,
  setModalAction,
}: {
  leftImage: Image;
  rightImage: Image;
  setModalAction: (action: string) => void;
}) => {
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);

  const image1InView = useInView(image1Ref);
  const image2InView = useInView(image2Ref);

  return (
    <div className='grid grid-cols-5 gap-8 align-middle'>
      <motion.div
        className='col-span-5 md:col-span-3 mt-0 md:mt-36 aspect-[3/2] overflow-hidden'
        ref={image1Ref}
        initial={{ opacity: 0, y: 25 }}
        animate={image1InView && { opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
      >
        <ImageComponent image={leftImage} setModalAction={setModalAction} />
      </motion.div>
      <motion.div
        className='col-span-5 md:col-span-2'
        ref={image2Ref}
        initial={{ opacity: 0, y: 25 }}
        animate={image2InView && { opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.7 }}
      >
        <div className='md:aspect-square overflow-hidden object-cover'>
          <ImageComponent image={rightImage} setModalAction={setModalAction} />
        </div>
      </motion.div>
    </div>
  );
};
