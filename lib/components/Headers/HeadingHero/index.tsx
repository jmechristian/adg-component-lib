import { useState } from 'react';
import { Watermark } from '../../Utility/Watermark';
import { AnimatePresence, motion } from 'framer-motion';
import { ImageObject } from '../../../defs';
import { EnlargeButton } from '../../Utility/EnlargeButton';
export const HeadingHero = ({
  title,
  location,
  hero,
}: {
  title: string;
  location: string;
  hero: ImageObject;
}) => {
  const [isHover, setIsHover] = useState(false);

  const setModalAction = (imageId: string) => {
    console.log(imageId);
  };

  return (
    <div className='flex flex-col gap-5 max-w-6xl mx-auto'>
      <div className='flex flex-col md:flex-row w-full justify-between md:items-end'>
        <div
          className='font-brand-serif text-5xl md:text-6xl xl:text-7xl px-5 md:px-0'
          //   ref={addToTitleRef}
        >
          {title}
        </div>
        <div className='font-brand-serif font-medium tracking-wider uppercase text-sm lg:text-lg text-gray-800 text-right px-5 md:px-0'>
          <div>{location}</div>
        </div>
      </div>
      <div
        className='w-full aspect-[16/12] md:!aspect-[16/9] relative overflow-hidden flex items-end'
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <img
          src={
            hero
              ? hero.url
              : 'https://adg-projects.nyc3.digitaloceanspaces.com/d510c4975f36df4b67a706957c4cf046.png'
          }
          id={hero ? hero.id : crypto.randomUUID()}
          data-caption={hero ? hero.caption : ''}
          className='object-cover'
        />
        <div>
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
                  imageId={hero.id}
                  caption={hero.caption || ''}
                  setModalAction={setModalAction}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
