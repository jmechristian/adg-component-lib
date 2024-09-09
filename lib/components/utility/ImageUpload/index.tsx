'use client';
import React, { useState, ChangeEvent } from 'react';
import '../../../styles.css';

interface ImageUploadProps {
  placeholderSrc: string;
  setNewImage?: ((val: File) => void | null) | undefined;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  placeholderSrc,
  setNewImage,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && setNewImage) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setNewImage(file);
    }
  };

  return (
    <div className='relative w-full h-full overflow-hidden border'>
      <div
        className='w-full h-full bg-cover bg-center'
        style={{
          backgroundImage: `url(${selectedImage || placeholderSrc})`,
        }}
      ></div>
      {setNewImage && (
        <label className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 text-white cursor-pointer hover:bg-opacity-75 transition-all ease-in-out'>
          <span className='px-3 py-2 bg-black/60 text-white'>Update Image</span>
          <input
            type='file'
            accept='image/*'
            className='hidden'
            onChange={handleImageChange}
          />
        </label>
      )}
    </div>
  );
};
