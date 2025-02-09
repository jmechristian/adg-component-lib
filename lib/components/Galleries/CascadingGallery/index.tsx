import { FullWidth } from '../../Images/FullWidth';
import { Image } from '../../../defs';
import { SplitLeft } from '../../Images/SplitLeft';
import { SplitRight } from '../../Images/SplitRight';

export const CascadingGallery = ({ images }: { images: Image[] }) => {
  return (
    <div className='flex flex-col gap-10'>
      {images[0] && <FullWidth image={images[0]} setModalAction={() => {}} />}
      {images[1] && images[2] && (
        <SplitLeft
          leftImage={images[1]}
          rightImage={images[2]}
          setModalAction={() => {}}
        />
      )}
      {images[3] && <FullWidth image={images[3]} setModalAction={() => {}} />}
      {images[4] && images[5] && (
        <SplitRight
          leftImage={images[4]}
          rightImage={images[5]}
          setModalAction={() => {}}
        />
      )}
      {images[6] && <FullWidth image={images[6]} setModalAction={() => {}} />}
    </div>
  );
};
