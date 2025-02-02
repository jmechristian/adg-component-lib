import { MdAdd } from 'react-icons/md';

export const EnlargeButton = ({
  imageId,
  caption,
  setModalAction,
}: {
  imageId: string;
  caption: string;
  setModalAction: (imageId: string) => void;
}) => {
  return (
    <div
      className='absolute z-40 left-2 bottom-2 text-white rounded-md cursor-pointer'
      style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
      onClick={() => {
        setModalAction(imageId);
      }}
    >
      <div className='flex items-center justify-center px-3 py-2 '>
        <div>
          <MdAdd className='w-5 h-5' />
        </div>
        <div className='text-sm hidden md:inline-block'>{caption}</div>
      </div>
    </div>
  );
};
