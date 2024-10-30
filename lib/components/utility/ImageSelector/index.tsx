import { useEffect, useMemo, useState } from 'react';
import Pagination from '../Pagination';
import { PlusIcon } from '@heroicons/react/24/outline';
export const ImageSelector = ({
  images,
  selected,
  returnSelected,
  uploadNewImage,
  saveImages,
}: {
  images: string[];
  selected: string[];
  returnSelected: (selected: string[]) => void;
  uploadNewImage: () => void;
  saveImages: (images: string[]) => void;
}) => {
  const [selectedImages, setSelectedImages] = useState<string[]>(selected);
  const [isCurrentPage, setIsCurrentPage] = useState<number>(1);
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

  const GFG = (array: string[], currentPage: number, pageSize: number) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return array.slice(startIndex, endIndex);
  };

  const filteredImages = images.filter((image) =>
    image.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedItems = useMemo(() => {
    if (filteredImages) {
      const currentPageData = GFG(filteredImages, isCurrentPage, 12);
      return currentPageData;
    }
  }, [filteredImages, isCurrentPage]);

  return (
    <div className='w-full mx-auto max-w-5xl mb-5'>
      <div className='grid grid-cols-12 gap-5'>
        <div className='col-span-8'>
          <div className='flex flex-col gap-8'>
            <div className='flex'>
              <input
                type='text'
                placeholder='Search...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='flex-grow p-2 border border-gray-300 rounded mr-2'
              />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              {paginatedItems ? (
                paginatedItems.map((image) => (
                  <div
                    key={image}
                    onClick={() => toggleSelectImage(image)}
                    className={`w-full aspect-square bg-cover cursor-pointer ${selectedImages.includes(image) ? 'border-8 border-black grayscale' : 'border-2 border-gray-300'}`}
                    style={{ backgroundImage: `url(${image})` }}
                  />
                ))
              ) : (
                <div>No images found</div>
              )}
            </div>
            <div>
              <Pagination
                totalItems={filteredImages.length}
                itemsPerPage={16}
                currentPage={isCurrentPage}
                onPageChange={setIsCurrentPage}
              />
            </div>
          </div>
        </div>
        <div className='col-span-4 bg-gray-200 p-6 border-2 border-black'>
          <div className='flex flex-col justify-between h-full'>
            <div className='flex flex-col gap-8'>
              <div className='flex justify-between'>
                <div className='font-bold text-gray-700'>Selected Images</div>
                <div className='text-sm text-gray-500'>
                  {selectedImages.length} / 12 max
                </div>
              </div>
              <div className='grid grid-cols-3 gap-3'>
                {selectedImages.slice(0, 12).map((image) => (
                  <div
                    key={image}
                    className='w-full aspect-square bg-cover cursor-pointer border-black border'
                    onClick={() => toggleSelectImage(image)}
                  >
                    <img
                      src={image}
                      alt='Selected'
                      className='w-full h-full object-cover'
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <button
                className='bg-indigo-700 text-white px-4 py-2  flex items-center gap-1'
                onClick={uploadNewImage}
              >
                <PlusIcon className='w-4 h-4' />
                Add New Image
              </button>
              <button
                className='bg-black text-white px-4 py-2  flex items-center gap-2'
                onClick={() => saveImages(selectedImages)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
