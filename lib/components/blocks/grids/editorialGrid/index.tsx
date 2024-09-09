import { H2, H3, H4 } from '../../../../main';
import { AuthorBlock } from '../../../utility/AuthorBlock';
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
import { Lesson } from '../../../../defs';
import '../../../../styles.css';

// Define the props type

interface EditorialGridProps {
  headline: string;
  subheadline?: string;
  heroLesson: Lesson;
  lessons: Lesson[];
}

export const EditorialGrid: React.FC<EditorialGridProps> = ({
  headline = 'Extended Producer Responsibility (EPR)',
  subheadline,
  heroLesson,
  lessons,
}) => {
  return (
    <div className='flex flex-col w-full max-w-7xl mx-auto py-5 gap-5'>
      <div className='flex flex-col gap-3 w-full'>
        <H3 children={headline} textColor='text-neutral-900' />

        <div className='text-lg'>{subheadline ? subheadline : ''}</div>
      </div>
      <div className='w-full flex flex-col gap-5'>
        <div className='w-full grid lg:grid-cols-2 items-center group'>
          <div
            className='w-full aspect-video bg-cover bg-center group-hover:-translate-x-1 group-hover:shadow-[6px_6px_0px_black] group-hover:-translate-y-2 transition-all ease-in-out'
            style={{
              backgroundImage: `url(${heroLesson.screengrab ? heroLesson.screengrab : heroLesson.seoImage})`,
            }}
          ></div>
          <div className='flex flex-col gap-10 p-6 lg:p-10'>
            <div className='w-full flex flex-col gap-2'>
              <div className='w-full flex flex-col'>
                <div className='text-xs font-medium text-clemson-dark'>
                  {heroLesson.backdate
                    ? heroLesson.backdate
                    : heroLesson.createdAt}
                </div>
              </div>
              <H2 children={heroLesson.title} textColor='text-neutral-900' />
              <div className='flex w-full items-center flex-wrap gap-x-2 gap-y-1'>
                {heroLesson.author && heroLesson.author.length > 0 ? (
                  heroLesson.author.map((au) => (
                    <AuthorBlock author={au} pic={true} small={true} />
                  ))
                ) : (
                  <></>
                )}
              </div>
              <div className='line-clamp-6'>{heroLesson.subhead}</div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-1.5 mt-2 cursor-pointer border-b-black border-b pb-1 w-fit'>
                  <div className='text-sm uppercase font-semibold'>
                    View Article
                  </div>
                  <div>
                    <MdArrowOutward size={20} color='black' />
                  </div>
                </div>
                <div className='flex items-center gap-1'>
                  <LinkedinShareButton
                    url={`https://www.packagingschool.com/lessons/${heroLesson.slug}`}
                    title={heroLesson.title}
                    summary={heroLesson.subhead}
                    source={`https://www.packagingschool.com/lessons/${heroLesson.slug}`}
                  >
                    <LinkedinIcon size={22} round bgStyle={{ fill: 'black' }} />
                  </LinkedinShareButton>
                  <FacebookShareButton
                    url={`https://www.packagingschool.com/lessons/${heroLesson.slug}`}
                    title={heroLesson.title}
                  >
                    <FacebookIcon size={22} round bgStyle={{ fill: 'black' }} />
                  </FacebookShareButton>
                  <TwitterShareButton
                    url={`https://www.packagingschool.com/lessons/${heroLesson.slug}`}
                    title={heroLesson.title}
                  >
                    <XIcon size={22} round bgStyle={{ fill: 'black' }} />
                  </TwitterShareButton>
                  <WhatsappShareButton
                    url={`https://www.packagingschool.com/lessons/${heroLesson.slug}`}
                    title={heroLesson.title}
                  >
                    <WhatsappIcon size={22} round bgStyle={{ fill: 'black' }} />
                  </WhatsappShareButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='grid lg:grid-cols-3 lg:gap-12 w-full'>
          {lessons.map((les) => (
            <div className='w-full flex flex-col gap-5 group cursor-pointer'>
              <div
                className='w-full aspect-video bg-center bg-cover group-hover:-translate-x-1 group-hover:shadow-[6px_6px_0px_black] group-hover:-translate-y-2 transition-all ease-in-out'
                onClick={() =>
                  window.open(
                    `https://www.packagingschool.com/lessons/${heroLesson.slug}`,
                    '_blank'
                  )
                }
                style={{
                  backgroundImage: `url(${les.screengrab ? les.screengrab : les.seoImage})`,
                }}
              ></div>
              <div className='flex flex-col gap-2 flex-1'>
                <div className='flex w-full flex-wrap gap-x-2 gap-y-1'>
                  {les.author && les.author.length > 0 ? (
                    les.author.map((au) => (
                      <AuthorBlock author={au} pic={true} small={true} />
                    ))
                  ) : (
                    <></>
                  )}
                </div>
                <div
                  className='flex flex-col'
                  onClick={() =>
                    window.open(
                      `https://www.packagingschool.com/lessons/${heroLesson.slug}`,
                      '_blank'
                    )
                  }
                >
                  <H4 children={les.title} textColor='text-neutral-900' />
                </div>
                <div className='flex justify-between w-full items-end flex-1'>
                  <div className='w-full flex flex-col'>
                    <div className='text-xs font-medium text-clemson-dark'>
                      {les.backdate ? les.backdate : les.createdAt}
                    </div>
                  </div>
                  <div className='flex items-center gap-1'>
                    <LinkedinShareButton
                      url={`https://www.packagingschool.com/lessons/${les.slug}`}
                      title={les.title}
                      summary={les.subhead}
                      source={`https://www.packagingschool.com/lessons/${les.slug}`}
                    >
                      <LinkedinIcon
                        size={18}
                        round
                        bgStyle={{ fill: 'black' }}
                      />
                    </LinkedinShareButton>
                    <FacebookShareButton
                      url={`https://www.packagingschool.com/lessons/${les.slug}`}
                      title={les.title}
                    >
                      <FacebookIcon
                        size={18}
                        round
                        bgStyle={{ fill: 'black' }}
                      />
                    </FacebookShareButton>
                    <TwitterShareButton
                      url={`https://www.packagingschool.com/lessons/${les.slug}`}
                      title={les.title}
                    >
                      <XIcon size={18} round bgStyle={{ fill: 'black' }} />
                    </TwitterShareButton>
                    <WhatsappShareButton
                      url={`https://www.packagingschool.com/lessons/${les.slug}`}
                      title={les.title}
                    >
                      <WhatsappIcon
                        size={18}
                        round
                        bgStyle={{ fill: 'black' }}
                      />
                    </WhatsappShareButton>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
