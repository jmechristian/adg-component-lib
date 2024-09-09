import { SocialGridItem } from '../../blocks/grids/socialGridItem';
import { H2 } from '../../H2';
import { AuthorBlock } from '../../utility/AuthorBlock';
import { MdArrowOutward } from 'react-icons/md';
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
import { Lesson } from '../../../defs';
import '../../../styles.css';
// Define the props type

interface LibraryLotmGridProps {
  lessons: Lesson[];
}

export const LibraryLotmGrid: React.FC<LibraryLotmGridProps> = ({
  lessons,
}) => {
  return (
    <div className='flex flex-col gap-5 w-full max-w-7xl mx-auto'>
      <div className='w-full grid lg:grid-cols-2 items-center group'>
        <div
          className='w-full aspect-video bg-cover bg-center group-hover:-translate-x-1 group-hover:shadow-[6px_6px_0px_black] group-hover:-translate-y-2 transition-all ease-in-out'
          style={{
            backgroundImage: `url(${lessons[0].screengrab ? lessons[0].screengrab : lessons[0].seoImage})`,
          }}
        ></div>
        <div className='flex flex-col gap-10 p-6 lg:p-10'>
          <div className='w-full flex flex-col gap-2'>
            <div className='w-full flex flex-col'>
              <div className='text-xs font-medium text-clemson-dark'>
                {lessons[0].backdate
                  ? lessons[0].backdate
                  : lessons[0].createdAt}
              </div>
            </div>
            <H2 children={lessons[0].title} textColor='text-neutral-900' />
            <div className='flex w-full items-center flex-wrap gap-x-2 gap-y-1'>
              {lessons[0].author && lessons[0].author.length > 0 ? (
                lessons[0].author.map((au) => (
                  <AuthorBlock author={au} pic={true} small={true} />
                ))
              ) : (
                <></>
              )}
            </div>
            <div className='line-clamp-6'>{lessons[0].subhead}</div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-1.5 mt-2 cursor-pointer border-b-black border-b pb-1 w-fit'>
                <div className='text-sm uppercase font-semibold'>
                  View Lesson
                </div>
                <div>
                  <MdArrowOutward size={20} color='black' />
                </div>
              </div>
              <div className='flex items-center gap-1'>
                <LinkedinShareButton
                  url={`https://www.packagingschool.com/lessons/${lessons[0].slug}`}
                  title={lessons[0].title}
                  summary={lessons[0].subhead}
                  source={`https://www.packagingschool.com/lessons/${lessons[0].slug}`}
                >
                  <LinkedinIcon size={22} round bgStyle={{ fill: 'black' }} />
                </LinkedinShareButton>
                <FacebookShareButton
                  url={`https://www.packagingschool.com/lessons/${lessons[0].slug}`}
                  title={lessons[0].title}
                >
                  <FacebookIcon size={22} round bgStyle={{ fill: 'black' }} />
                </FacebookShareButton>
                <TwitterShareButton
                  url={`https://www.packagingschool.com/lessons/${lessons[0].slug}`}
                  title={lessons[0].title}
                >
                  <XIcon size={22} round bgStyle={{ fill: 'black' }} />
                </TwitterShareButton>
                <WhatsappShareButton
                  url={`https://www.packagingschool.com/lessons/${lessons[0].slug}`}
                  title={lessons[0].title}
                >
                  <WhatsappIcon size={22} round bgStyle={{ fill: 'black' }} />
                </WhatsappShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10'>
        {lessons.slice(1).map((les) => (
          <SocialGridItem lesson={les} />
        ))}
      </div>
    </div>
  );
};
