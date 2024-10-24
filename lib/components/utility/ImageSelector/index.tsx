import { useEffect, useState } from 'react';

export const ImageSelector = ({
  images,
  selected,
  returnSelected,
}: {
  images: string[];
  selected: string[];
  returnSelected: (selected: string[]) => void;
}) => {
  const [selectedImages, setSelectedImages] = useState<string[]>(selected);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    returnSelected(selectedImages);
  }, [selectedImages, returnSelected]);

  const toggleSelectImage = (image: string) => {
    setSelectedImages((prevSelected) =>
      prevSelected.includes(image)
        ? prevSelected.filter((img) => img !== image)
        : [...prevSelected, image]
    );
  };

  const filteredImages = images.filter((image) =>
    image.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className='flex mb-4'>
        <input
          type='text'
          placeholder='Search...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='flex-grow p-2 border border-gray-300 rounded mr-2'
        />
        <button className='p-2 bg-blue-500 text-white rounded'>Save</button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {filteredImages.map((image) => (
          <div
            key={image}
            onClick={() => toggleSelectImage(image)}
            className={`w-24 h-24 bg-cover cursor-pointer ${selectedImages.includes(image) ? 'border-4 border-green-500' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
    </div>
  );
};
