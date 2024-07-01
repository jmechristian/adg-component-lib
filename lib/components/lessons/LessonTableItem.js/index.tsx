import { MdAccountCircle, MdExitToApp } from 'react-icons/md';
import {
  BrutalCircleIconTooltip,
  ExpandableDiv,
  AuthorName,
} from '../../../main';

interface GetLessonResponse {
  getLesson: {
    author: string[];
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

interface LessonComponentProps {
  lessonData: GetLessonResponse;
  authors: string[];
  view: () => void;
}

export const LessonTableItem: React.FC<LessonComponentProps> = ({
  authors,
  lessonData,
  view,
}) => {
  const { getLesson } = lessonData;

  const newDateTop =
    getLesson &&
    new Date(
      getLesson.backdate ? getLesson.backdate : getLesson.createdAt
    ).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });

  const newDateBottom =
    getLesson &&
    new Date(
      getLesson.backdate ? getLesson.backdate : getLesson.createdAt
    ).getFullYear();

  return getLesson.id ? (
    <div
      key={getLesson.id}
      className={`w-full max-w-7xl grid gap-3 cursor-pointer py-5 px-5 flex-col md:grid-cols-12 border-2 border-black content-center ${
        getLesson.type === 'LOTM'
          ? 'bg-brand-yellow'
          : getLesson.type === 'REGULATORY'
            ? 'bg-clemson'
            : 'bg-base-brand'
      } transition-all bg-opacity-20 hover:bg-opacity-40 `}
    >
      {/* DATE */}
      <div
        className='h-full max-w-full md:hidden lg:block lg:col-span-1 lg:content-center'
        onClick={view}
      >
        <div className='flex gap-1 lg:gap-0 md:flex-col w-full md:justify-center items-center'>
          <div className='font-semibold uppercase tracking-tighter text-sm'>
            {newDateTop}
          </div>
          <div className='font-semibold uppercase tracking-tighter text-sm'>
            {newDateBottom}
          </div>
        </div>
      </div>
      <div
        className='col-span-5 md:col-span-6 lg:col-span-5 lg:grid lg:grid-cols-4 lg:content-center'
        onClick={view}
      >
        {/* TITLE */}
        <div className='grid grid-cols-7 gap-2 w-full lg:col-span-4'>
          <div className='col-span-5'>
            <div className='flex flex-col gap-1.5 col-span-3'>
              <div className='flex flex-col'>
                <div className='hidden md:flex lg:hidden items-center gap-1 text-neutral-600'>
                  <div className='font-semibold uppercase tracking-tighter text-sm'>
                    {newDateTop}
                  </div>
                  <div className='font-semibold uppercase tracking-tighter text-sm'>
                    {newDateBottom}
                  </div>
                </div>
                <div className='h4-base'>{getLesson.title}</div>
                <div className='flex gap-x-2 flex-wrap'>
                  {authors &&
                    authors.map((auth) => (
                      <div className='flex items-center gap-0.5' key={auth}>
                        <div>
                          <MdAccountCircle color='gray' size={16} />
                        </div>
                        <AuthorName name={auth} />
                      </div>
                    ))}
                </div>
              </div>
              <div className='flex flex-wrap items-center gap-1.5'>
                {getLesson.tags && getLesson.tags.items.length > 0 ? (
                  getLesson.tags.items.map((t) => (
                    <div
                      className='text-xs bg-white/40 py-1 px-1.5 border border-black uppercase font-semibold'
                      key={t.id}
                    >
                      {t.tags.tag}
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className='col-span-2 px-1 xl:px-5'>
            {getLesson.type === 'LOTM' ? (
              <div
                className='w-full h-full bg-contain bg-center bg-no-repeat'
                style={{
                  backgroundImage: `url('https://packschool.s3.amazonaws.com/LOTM+Logo+Final-Black.png')`,
                }}
              ></div>
            ) : getLesson.type === 'REGULATORY' ? (
              <div
                className='w-full h-full bg-contain bg-center bg-no-repeat'
                style={{
                  backgroundImage: `url('https://packschool.s3.amazonaws.com/ROTM-logo-hor.svg')`,
                }}
              ></div>
            ) : (
              <div></div>
            )}
          </div>
        </div>

        <div className='lg:flex justify-center items-center p-2'>
          {getLesson.type === 'LOTM' ? (
            <div
              className='w-full h-full bg-contain bg-center bg-no-repeat'
              style={{
                backgroundImage: `url('https://packschool.s3.amazonaws.com/LOTM+Logo+Final-Black.png')`,
              }}
            ></div>
          ) : getLesson.type === 'REGULATORY' ? (
            <div
              className='w-full h-full bg-contain bg-center bg-no-repeat'
              style={{
                backgroundImage: `url('https://packschool.s3.amazonaws.com/ROTM-logo-hor.svg')`,
              }}
            ></div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <ExpandableDiv
        content={getLesson.subhead}
        textColor='text-black'
        height={120}
      />
      <div
        className='hidden col-span-1 md:flex flex-col gap-1.5 content-center justify-center'
        onClick={view}
      >
        <div className='content-center mx-auto'>
          <BrutalCircleIconTooltip
            tooltip={'View'}
            bgColor={'bg-clemson'}
            fn={view}
          >
            <MdExitToApp color='white' size={22} />
          </BrutalCircleIconTooltip>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};
