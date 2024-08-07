import { BrutalButton, CourseCard } from '../../../../main';
import { H2 } from '../../../H2';

interface CourseCardCallout {
  headline: string;
  subheadline: string;
  linkText: string;
  course: {
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
  };
}

export const CourseCardCallout: React.FC<CourseCardCallout> = ({
  headline,
  subheadline,
  linkText,
  course,
}) => {
  return (
    <div
      className='w-full border-y-2 py-10 border-black lg:border-2 lg:rounded-2xl bg-base-brand/60 max-w-7xl  mx-auto'
      id='fpc'
    >
      <div className='flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-24 px-5 max-w-xl lg:max-w-6xl mx-auto'>
        <div className='flex flex-col gap-4'>
          <H2 children={headline} textColor='text-neutral-900' />
          <div className='text-lg'>{subheadline}</div>
          <div className='w-fit'>
            <BrutalButton
              text={linkText}
              background={'bg-white'}
              textColor={'text-black'}
              link={'/food-packaging'}
            />
          </div>
        </div>
        <div className='w-full flex justify-center items-center'>
          <div
            className='w-full max-w-[400px] cursor-pointer'
            //   onClick={() => router.push('/food-packaging')}
          >
            <CourseCard course={course} />
          </div>
        </div>
      </div>
    </div>
  );
};
