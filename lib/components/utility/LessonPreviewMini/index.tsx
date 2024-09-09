'use client';

import { AuthorBlock } from '../AuthorBlock';
import { Author } from '../../../defs';
import '../../../styles.css';

interface LessonPreviewMiniProps {
  title: string;
  authors?: Author[];
  date: string;
  slug: string;
  hero: string;
}

export const LessonPreviewMini: React.FC<LessonPreviewMiniProps> = ({
  title,
  authors,
  date,
  slug,
  hero,
}) => {
  return (
    <div
      className='w-full hover:bg-indigo-100 transition-all ease-in p-5 cursor-pointer'
      onClick={() => window.open(slug, '_blank')}
    >
      <div className='w-full grid md:grid-cols-12 overflow-hidden'>
        <div className='col-span-9 pr-4'>
          <div className='flex flex-col gap-1.5 w-full'>
            <div className='text-xs font-medium text-clemson-dark'>{date}</div>
            <div className='text-lg font-semibold leading-tight'>{title}</div>
            <div className='w-full flex items-center flex-wrap gap-x-3'>
              {authors &&
                authors.map((au) => (
                  <div key={au.id}>
                    <AuthorBlock author={au} pic={false} small={true} />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className='col-span-3'>
          <div
            className='w-full aspect-square bg-center bg-cover'
            style={{ backgroundImage: `url(${hero})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
