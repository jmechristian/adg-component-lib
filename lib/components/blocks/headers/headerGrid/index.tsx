import { H2 } from '../../../../main';
import { AuthorBlock } from '../../../utility/AuthorBlock';
import { LessonPreviewMini } from '../../../utility/LessonPreviewMini';

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

interface HeaderGridProps {
  headline: string;
  subheadline: string;
  centered?: boolean;
  authors?: authorType[];
  hero: string;
  sidebarHeadline: string;
  lessons: GetLessonResponse[];
}

export const HeaderGrid: React.FC<HeaderGridProps> = ({
  headline = 'Extended Producer Responsibility (EPR)',
  subheadline = 'Extended Producer Responsibility (EPR) in packaging design is a policy approach that holds manufacturers accountable for the entire lifecycle of their products, including end-of-life management. This means that producers are responsible for the collection, recycling, and disposal of their packaging materials, incentivizing them to design more sustainable and eco-friendly packaging solutions. EPR aims to reduce environmental impact and promote a circular economy by shifting the cost and responsibility of waste management from taxpayers to producers.',
  authors,
  hero = 'https://packschool.s3.amazonaws.com/cadboard-plant.webp',
  sidebarHeadline = 'Latest EPR Lessons',
  lessons,
}) => {
  return (
    <div
      className={`grid lg:grid-cols-12 w-full gap-10 lg:gap-16 max-w-7xl mx-auto px-4 xl:px-0`}
    >
      <div className='col-span-8 w-full'>
        <div className='flex flex-col gap-5'>
          <div
            className='aspect-video w-full bg-black bg-cover bg-center'
            style={{ backgroundImage: `url(${hero})` }}
          ></div>
          <div className='flex flex-col gap-3'>
            <H2 children={headline} textColor='text-black' />
            <div className='flex items-center flex-wrap gap-5'>
              {authors && authors.length > 0 ? (
                authors.map((au) => (
                  <AuthorBlock author={au.author} pic={true} />
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className='text-lg'>{subheadline}</div>
        </div>
      </div>
      <div className='col-span-4 h-full border-l flex flex-col divide-y divide-black  border-l-black'>
        <div className='pb-2.5 pl-5'>
          <div className='text-xs uppercase tracking-widest font-semibold'>
            {sidebarHeadline}
          </div>
        </div>
        {lessons.map((les) => (
          <LessonPreviewMini
            key={les.getLesson.id}
            title={les.getLesson.title}
            authors={authors}
            hero={
              les.getLesson.screengrab
                ? les.getLesson.screengrab
                : les.getLesson.seoImage
            }
            date={
              les.getLesson.backdate
                ? les.getLesson.backdate
                : les.getLesson.createdAt
            }
            slug={les.getLesson.slug}
          />
        ))}
      </div>
    </div>
  );
};
