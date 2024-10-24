import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Define the interface for the image object
interface Image {
  id: string;
  src: string;
  caption?: string;
  alt?: string;
}

// Define the props for the ThumbnailGallery component
interface ThumbnailGalleryProps {
  images: Image[];
}

export const ThumbnailGallery: React.FC<ThumbnailGalleryProps> = ({
  images,
}) => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const openModal = (image: Image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='max-w-7xl mx-auto min-w-[800px] w-full'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {images.map((image) => (
          <div
            key={image.id}
            className='relative group w-full pt-[100%] bg-cover bg-center cursor-pointer'
            style={{ backgroundImage: `url(${image.src})` }}
            onClick={() => openModal(image)}
          >
            <motion.div
              className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity'
              whileHover={{ scale: 1.05 }}
            >
              <span className='text-white py-2 px-5 leading-tight text-sm'>
                {image.caption || 'View'}
              </span>
            </motion.div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50'>
          <div className='relative bg-white p-4 max-w-7xl mx-auto'>
            <button
              onClick={closeModal}
              className='absolute top-2 right-2 text-white w-6 h-6 rounded-full bg-black'
            >
              X
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className='w-full h-auto max-h-[80vh] object-contain'
            />
            <p className='mt-2 text-sm text-center'>{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
};
