import '../../../../../src/index.css';
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

// Define the props type

interface authorType {
  author: {
    name: string;
    headshot: string;
    linkedIn: string;
    id: string;
  };
}

interface GetLessonResponse {
  getLesson: {
    authors: authorType[];
    backdate: string;
    content: string;
    createdAt: string;
    id: string;
    media: string;
    objectives: string[];
    screengrab: string | null;
    seoImage: string;
    slug: string;
    status: string;
    subhead: string;
    tags: {
      items: {
        id: string;
        tags: {
          id: string;
          tag: string;
        };
      }[];
    };
    title: string;
    type: string;
    videoLink: string | null;
  };
}

interface EditorialGridProps {
  headline: string;
  subheadline?: string;
  heroLesson: GetLessonResponse;
  lessons: GetLessonResponse[];
}

export const EditorialGrid: React.FC<EditorialGridProps> = ({
  headline = 'Extended Producer Responsibility (EPR)',
  subheadline,
  heroLesson,
  lessons,
}) => {
  return (
    <div className='flex flex-col w-full max-w-7xl mx-auto py-5'>
      <div className='flex flex-col gap-3 w-full'>
        <H3 children={headline} textColor='text-neutral-900' />

        <div className='text-lg'>{subheadline ? subheadline : ''}</div>
      </div>
      <div className='w-full flex flex-col gap-5'>
        <div className='w-full grid lg:grid-cols-2 items-center group'>
          <div
            className='w-full aspect-video bg-cover bg-center group-hover:-translate-x-1 group-hover:shadow-[6px_6px_0px_black] group-hover:-translate-y-2 transition-all ease-in-out'
            style={{
              backgroundImage: `url(${heroLesson.getLesson.screengrab ? heroLesson.getLesson.screengrab : heroLesson.getLesson.seoImage})`,
            }}
          ></div>
          <div className='flex flex-col gap-10 p-6 lg:p-10'>
            <div className='w-full flex flex-col gap-2'>
              <div className='w-full flex flex-col'>
                <div className='text-xs font-medium text-clemson-dark'>
                  {heroLesson.getLesson.backdate
                    ? heroLesson.getLesson.backdate
                    : heroLesson.getLesson.createdAt}
                </div>
              </div>
              <H2
                children={heroLesson.getLesson.title}
                textColor='text-neutral-900'
              />
              <div className='flex w-full items-center flex-wrap gap-x-2 gap-y-1'>
                {heroLesson.getLesson.authors &&
                heroLesson.getLesson.authors.length > 0 ? (
                  heroLesson.getLesson.authors.map((au) => (
                    <AuthorBlock author={au.author} pic={true} small={true} />
                  ))
                ) : (
                  <></>
                )}
              </div>
              <div className='line-clamp-6'>{heroLesson.getLesson.subhead}</div>
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
                    url={`https://www.packagingschool.com/lessons/${heroLesson.getLesson.slug}`}
                    title={heroLesson.getLesson.title}
                    summary={heroLesson.getLesson.subhead}
                    source={`https://www.packagingschool.com/lessons/${heroLesson.getLesson.slug}`}
                  >
                    <LinkedinIcon size={22} round bgStyle={{ fill: 'black' }} />
                  </LinkedinShareButton>
                  <FacebookShareButton
                    url={`https://www.packagingschool.com/lessons/${heroLesson.getLesson.slug}`}
                    title={heroLesson.getLesson.title}
                  >
                    <FacebookIcon size={22} round bgStyle={{ fill: 'black' }} />
                  </FacebookShareButton>
                  <TwitterShareButton
                    url={`https://www.packagingschool.com/lessons/${heroLesson.getLesson.slug}`}
                    title={heroLesson.getLesson.title}
                  >
                    <XIcon size={22} round bgStyle={{ fill: 'black' }} />
                  </TwitterShareButton>
                  <WhatsappShareButton
                    url={`https://www.packagingschool.com/lessons/${heroLesson.getLesson.slug}`}
                    title={heroLesson.getLesson.title}
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
                    `https://www.packagingschool.com/lessons/${heroLesson.getLesson.slug}`,
                    '_blank'
                  )
                }
                style={{
                  backgroundImage: `url(${les.getLesson.screengrab ? les.getLesson.screengrab : les.getLesson.seoImage})`,
                }}
              ></div>
              <div className='flex flex-col gap-2 flex-1'>
                <div className='flex w-full flex-wrap gap-x-2 gap-y-1'>
                  {les.getLesson.authors && les.getLesson.authors.length > 0 ? (
                    les.getLesson.authors.map((au) => (
                      <AuthorBlock author={au.author} pic={true} small={true} />
                    ))
                  ) : (
                    <></>
                  )}
                </div>
                <div
                  className='flex flex-col'
                  onClick={() =>
                    window.open(
                      `https://www.packagingschool.com/lessons/${heroLesson.getLesson.slug}`,
                      '_blank'
                    )
                  }
                >
                  <H4
                    children={les.getLesson.title}
                    textColor='text-neutral-900'
                  />
                </div>
                <div className='flex justify-between w-full items-end flex-1'>
                  <div className='w-full flex flex-col'>
                    <div className='text-xs font-medium text-clemson-dark'>
                      {les.getLesson.backdate
                        ? les.getLesson.backdate
                        : les.getLesson.createdAt}
                    </div>
                  </div>
                  <div className='flex items-center gap-1'>
                    <LinkedinShareButton
                      url={`https://www.packagingschool.com/lessons/${les.getLesson.slug}`}
                      title={les.getLesson.title}
                      summary={les.getLesson.subhead}
                      source={`https://www.packagingschool.com/lessons/${les.getLesson.slug}`}
                    >
                      <LinkedinIcon
                        size={18}
                        round
                        bgStyle={{ fill: 'black' }}
                      />
                    </LinkedinShareButton>
                    <FacebookShareButton
                      url={`https://www.packagingschool.com/lessons/${les.getLesson.slug}`}
                      title={les.getLesson.title}
                    >
                      <FacebookIcon
                        size={18}
                        round
                        bgStyle={{ fill: 'black' }}
                      />
                    </FacebookShareButton>
                    <TwitterShareButton
                      url={`https://www.packagingschool.com/lessons/${les.getLesson.slug}`}
                      title={les.getLesson.title}
                    >
                      <XIcon size={18} round bgStyle={{ fill: 'black' }} />
                    </TwitterShareButton>
                    <WhatsappShareButton
                      url={`https://www.packagingschool.com/lessons/${les.getLesson.slug}`}
                      title={les.getLesson.title}
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
