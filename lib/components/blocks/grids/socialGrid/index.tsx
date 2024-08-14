import { H3 } from '../../../../main';
import { SocialGridItem } from '../socialGridItem';

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

interface SocialGridProps {
  headline: string;
  subheadline?: string;
  lessons: GetLessonResponse[];
}

export const SocialGrid: React.FC<SocialGridProps> = ({
  headline = 'Extended Producer Responsibility (EPR)',
  subheadline,
  lessons,
}) => {
  return (
    <div className='flex flex-col gap-5 w-full max-w-7xl mx-auto'>
      <div className='flex flex-col gap-3'>
        <H3 children={headline} textColor='text-neutral-900' />
        <div className='text-lg'>{subheadline ? subheadline : ''}</div>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10'>
        {lessons.map((les) => (
          <SocialGridItem lesson={les.getLesson} />
        ))}
      </div>
    </div>
  );
};
