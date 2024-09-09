import { CourseTableItem } from '../../../courses/courseTableItem';
import { H3 } from '../../../H3';
import '../../../../styles.css';
// Define the props type

interface GetLMSCourse {
  altLink: string | null;
  categoryArray: string[];
  courseId: string;
  hours: string | null;
  id: string;
  lessons: string | null;
  link: string;
  objectives: string[];
  preview: string;
  price: string;
  seoImage: string;
  slug: string;
  stripeLink: string | null;
  subheadline: string;
  title: string;
  videos: string | null;
  what_learned: string;
}

interface CourseTableProps {
  headline: string;
  subheadline?: string;
  courses: GetLMSCourse[];
}

export const CourseTable: React.FC<CourseTableProps> = ({
  headline,
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
      <div className='flex flex-col gap-3'>
        {courses.map((cou) => (
          <div key={cou.id}>
            <CourseTableItem course={cou} />
          </div>
        ))}
      </div>
    </div>
  );
};
