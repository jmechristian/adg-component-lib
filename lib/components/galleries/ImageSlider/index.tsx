import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { motion } from 'framer-motion';

interface Image {
  id: string;
  src: string;
  caption?: string;
  alt?: string;
}

interface ImageSliderProps {
  images: Image[];
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='relative w-full min-w-[400px] max-w-7xl mx-auto'>
      <MdChevronLeft
        className='absolute top-1/2 text-white left-0 transform -translate-y-1/2 text-3xl cursor-pointer z-10'
        onClick={prevSlide}
      />
      <div className='overflow-hidden'>
        <motion.div
          className='flex'
          initial={{ x: '-100%' }}
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: 'spring', damping: 15, stiffness: 150 }}
        >
          {images.map((image, index) => (
            <div className='flex flex-col gap-3 min-w-full' key={index}>
              <div
                className='min-w-full relative aspect-video bg-no-repeat bg-black'
                style={{
                  backgroundImage: `url(${image.src})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                }}
              ></div>
              {image.caption && (
                <p className='text-sm text-gray-500 w-full'>{image.caption}</p>
              )}
            </div>
          ))}
        </motion.div>
      </div>
      <MdChevronRight
        className='absolute top-1/2 right-0 transform -translate-y-1/2 text-3xl cursor-pointer z-10 text-white'
        onClick={nextSlide}
      />
    </div>
  );
};
