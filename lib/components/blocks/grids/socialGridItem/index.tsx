'use client';

import { AuthorBlock } from '../../../utility/AuthorBlock';
import '../../../../styles.css';
import { H4 } from '../../../H4';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from 'react-share';
import { Lesson } from '../../../../defs';

interface SocialGridItemProps {
  lesson: Lesson;
}

export const SocialGridItem: React.FC<SocialGridItemProps> = ({ lesson }) => {
  return (
    <div className='flex flex-1 justify-between flex-col group cursor-pointer'>
      <div
        key={lesson.id}
        className='w-full flex flex-col gap-3'
        onClick={() =>
          window.open(
            `https://www.packagingschool.com/lessons/${lesson.slug}`,
            '_blank'
          )
        }
      >
        <div
          className='w-full h-[200px] bg-cover bg-center group-hover:-translate-x-1 group-hover:shadow-[6px_6px_0px_black] group-hover:-translate-y-2 transition-all ease-in-out'
          style={{
            backgroundImage: `url(${lesson.screengrab ? lesson.screengrab : lesson.seoImage})`,
          }}
        ></div>
        <div className='flex w-full items-center flex-wrap gap-x-2 gap-y-1'>
          {lesson.author && lesson.author.length > 0 ? (
            lesson.author.map((au) => (
              <AuthorBlock author={au} pic={true} small={true} />
            ))
          ) : (
            <></>
          )}
        </div>
        <div>
          <H4 children={lesson.title} textColor='text-neutral-900' />
        </div>
        <div className='line-clamp-6 text-sm'>{lesson.subhead}</div>
      </div>
      <div className='flex justify-between w-full items-end'>
        <div className='w-full flex flex-col'>
          <div className='text-xs font-medium text-clemson-dark'>
            {lesson.backdate ? lesson.backdate : lesson.createdAt}
          </div>
        </div>
        <div className='flex items-center gap-1 mt-3'>
          <LinkedinShareButton
            url={`https://www.packagingschool.com/lessons/${lesson.slug}`}
            title={lesson.title}
            summary={lesson.subhead}
            source={`https://www.packagingschool.com/lessons/${lesson.slug}`}
          >
            <LinkedinIcon size={22} round bgStyle={{ fill: 'black' }} />
          </LinkedinShareButton>
          <FacebookShareButton
            url={`https://www.packagingschool.com/lessons/${lesson.slug}`}
            title={lesson.title}
          >
            <FacebookIcon size={22} round bgStyle={{ fill: 'black' }} />
          </FacebookShareButton>
          <TwitterShareButton
            url={`https://www.packagingschool.com/lessons/${lesson.slug}`}
            title={lesson.title}
          >
            <XIcon size={22} round bgStyle={{ fill: 'black' }} />
          </TwitterShareButton>
          <WhatsappShareButton
            url={`https://www.packagingschool.com/lessons/${lesson.slug}`}
            title={lesson.title}
          >
            <WhatsappIcon size={22} round bgStyle={{ fill: 'black' }} />
          </WhatsappShareButton>
        </div>
      </div>
    </div>
  );
};
