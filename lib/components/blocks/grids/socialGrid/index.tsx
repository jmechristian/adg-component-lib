import { Lesson } from '../../../../defs';
import { H3 } from '../../../../main';
import { SocialGridItem } from '../socialGridItem';
import '../../../../styles.css';

interface SocialGridProps {
  headline: string;
  subheadline?: string;
  lessons: Lesson[];
}

export const SocialGrid: React.FC<SocialGridProps> = ({
  headline = 'Extended Producer Responsibility (EPR)',
  subheadline,
  lessons,
}) => {
  return (
    <div className='flex flex-col gap-10 w-full max-w-7xl mx-auto'>
      <div className='flex flex-col gap-3'>
        <H3 children={headline} textColor='text-neutral-900' />
        <div className='text-lg'>{subheadline ? subheadline : ''}</div>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10'>
        {lessons.map((les) => (
          <SocialGridItem lesson={les} />
        ))}
      </div>
    </div>
  );
};
