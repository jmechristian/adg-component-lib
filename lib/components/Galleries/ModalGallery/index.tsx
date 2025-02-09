import React, { useEffect, useState } from 'react';
import { Image } from '../../../defs';
import { MdClose, MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';

export const ModalGallery = ({
  images,
  closeModal,
  currentIndex,
  projectName,
}: {
  images: Image[];
  closeModal: () => void;
  currentIndex: number;
  projectName: string;
}) => {
  const [imageToShow, setImageToShow] = useState(currentIndex);
  const [direction, setDirection] = useState(-1);
  const [imageIndex, setImageIndex] = useState(currentIndex);

  useEffect(() => {
    setImageToShow(imageIndex);
  }, [imageIndex]);

  const moveBack = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
      setDirection(-1);
    }
  };

  const moveForward = () => {
    if (imageIndex < images.length - 1) {
      setImageIndex(imageIndex + 1);
      setDirection(1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') moveBack();
      if (e.key === 'ArrowRight') moveForward();
      if (e.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [imageIndex]);

  return (
    <div className='w-full h-full bg-white fixed z-50 top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center'>
      <div className='flex justify-center lg:justify-between items-center w-full h-full'>
        <div
          className='hidden lg:flex w-1/12 justify-center'
          onClick={moveBack}
        >
          {imageIndex > 0 && (
            <MdChevronLeft className='w-9 h-9 text-gray-400 cursor-pointer' />
          )}
        </div>

        <div className='w-full lg:w-10/12 xl:w-8/12 h-full relative flex flex-col justify-center items-center'>
          <AnimatePresence>
            <motion.img
              src={images[imageToShow].url}
              key={images[imageToShow].url}
              initial={{ opacity: 0, x: direction > 0 ? 1000 : -1000 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction < 0 ? 1000 : -1000 }}
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag='x'
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(event, info) => {
                const dragThreshold = 100;
                if (
                  info.offset.x < -dragThreshold &&
                  imageIndex < images.length - 1
                ) {
                  moveForward();
                } else if (info.offset.x > dragThreshold && imageIndex > 0) {
                  moveBack();
                }
              }}
              className='absolute w-full object-contain'
              style={{ maxHeight: '86%' }}
            />
          </AnimatePresence>
        </div>
        <div
          className='hidden lg:flex w-1/12 justify-center'
          onClick={moveForward}
        >
          {imageIndex < images.length - 1 && (
            <MdChevronRight className='w-9 h-9 text-gray-400 cursor-pointer' />
          )}
        </div>
      </div>
      <div className='absolute flex top-4 w-full justify-between align-center px-3'>
        <div></div>
        <div className='font-brand-serif text-lg lg:text-2xl'>
          {projectName}
        </div>
        <div className='cursor-pointer' onClick={() => closeModal()}>
          <MdClose className='w-7 h-7 text-gray-400' />
        </div>
      </div>
      <div className='absolute bottom-9'>
        <div className='text-sm text-gray-500'>
          {images[imageToShow].caption}
        </div>
      </div>
    </div>
  );
};
