import React, { useRef } from 'react';
import { ImageComponent } from '../ImageComponent';
import { useInView, motion } from 'framer-motion';
import { Image } from '../../../defs';

export const FullWidth = ({
  image,
  setModalAction,
}: {
  image: Image;
  setModalAction: (action: string) => void;
}) => {
  const fullRef = useRef<HTMLDivElement>(null);
  const imageInView = useInView(fullRef);

  return (
    <motion.div
      className='w-full md:aspect-w-16 md:aspect-h-9 overflow-hidden'
      initial={{ opacity: 0, y: 25 }}
      animate={imageInView && { opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
      ref={fullRef}
    >
      <ImageComponent image={image} setModalAction={setModalAction} />
    </motion.div>
  );
};
