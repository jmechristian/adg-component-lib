import React, { useState } from 'react';
import Watermark from '../../Utility/Watermark';
import { EnlargeButton } from '../../Utility/EnlargeButton';
import { motion, AnimatePresence } from 'framer-motion';
import { Image } from '../../../defs';

export const ImageComponent = ({
  image,
  setModalAction,
}: {
  image: Image;
  setModalAction: (action: string) => void;
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className='w-full h-full relative overflow-hidden'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        src={image.url}
        className='object-center object-cover w-full h-full'
        data-caption={image.caption}
      />
      <Watermark />
      <AnimatePresence>
        {isHover && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            exit={{ opacity: 0 }}
          >
            <EnlargeButton
              imageId={image.id}
              caption={image.caption ?? ''}
              setModalAction={setModalAction}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
