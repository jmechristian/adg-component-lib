import '../../../../../src/index.css';
import { H3 } from '../../../../main';
import { CourseCard } from '../../../courses/courseCard';

// Define the props type

interface GetLMSCourse {
  altLink: string | null;
  categoryArray: string[];
  courseId: string;
  hours: string;
  id: string;
  lessons: string;
  link: string;
  objectives: string[];
  preview: string;
  price: string;
  seoImage: string;
  slug: string;
  stripeLink: string;
  subheadline: string;
  title: string;
  videos: string;
  what_learned: string;
}

interface CourseCardGridProps {
  headline: string;
  subheadline?: string;
  courses: GetLMSCourse[];
}

export const CourseCardGrid: React.FC<CourseCardGridProps> = ({
  headline = 'Extended Producer Responsibility (EPR)',
  subheadline,
  courses,
}) => {
  return (
    <div className='flex flex-col gap-5 w-full max-w-7xl mx-auto'>
      <div className='flex flex-col gap-3 mb-2'>
        <H3 children={headline} textColor='text-neutral-900' />
        <div className='text-lg max-w-4xl w-full leading-snug'>
          {subheadline ? subheadline : ''}
        </div>
      </div>
      <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-x-16 gap-y-10'>
        {courses.map((cou) => (
          <div key={cou.id}>
            <CourseCard course={cou} />
          </div>
        ))}
      </div>
    </div>
  );
};
