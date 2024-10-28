import { useEffect, useMemo, useState } from 'react';
import Pagination from '../Pagination';

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
      const currentPageData = GFG(filteredImages, isCurrentPage, 16);
      return currentPageData;
    }
  }, [filteredImages, isCurrentPage]);

  return (
    <div className='w-full min-w-[500px] max-w-[800px] mx-auto flex flex-col gap-8'>
      <div className='flex'>
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
        {paginatedItems ? (
          paginatedItems.map((image) => (
            <div
              key={image}
              onClick={() => toggleSelectImage(image)}
              className={`w-full aspect-square bg-cover cursor-pointer ${selectedImages.includes(image) ? 'border-4 border-green-500' : ''}`}
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
  );
};
