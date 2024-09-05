import { H2 } from '../../../../main';
import { AuthorBlock } from '../../../utility/AuthorBlock';
import { LessonPreviewMini } from '../../../utility/LessonPreviewMini';
import { ImageUpload } from '../../../../main';
import { Lesson, Author } from '../../../../defs';

// Define the props type

interface HeaderGridProps {
  headline: string;
  subheadline: string;
  centered?: boolean;
  authors?: Author[];
  hero: string;
  sidebarHeadline: string;
  lessons: Lesson[];
  setNewHero: (val: string) => void;
}

export const HeaderGrid: React.FC<HeaderGridProps> = ({
  headline = 'Extended Producer Responsibility (EPR)',
  subheadline = 'Extended Producer Responsibility (EPR) in packaging design is a policy approach that holds manufacturers accountable for the entire lifecycle of their products, including end-of-life management. This means that producers are responsible for the collection, recycling, and disposal of their packaging materials, incentivizing them to design more sustainable and eco-friendly packaging solutions. EPR aims to reduce environmental impact and promote a circular economy by shifting the cost and responsibility of waste management from taxpayers to producers.',
  authors,
  hero = 'https://packschool.s3.amazonaws.com/cadboard-plant.webp',
  sidebarHeadline = 'Latest EPR Lessons',
  lessons,
  setNewHero,
}) => {
  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}/${month}/${day}`;
  };

  return (
    <div
      className={`grid lg:grid-cols-12 w-full gap-10 lg:gap-16 max-w-7xl mx-auto px-4 xl:px-0`}
    >
      <div className='col-span-8 w-full'>
        <div className='flex flex-col gap-5'>
          <div className='aspect-video w-full'>
            <ImageUpload
              placeholderSrc={
                hero
                  ? hero
                  : 'https://packschool.s3.amazonaws.com/cadboard-plant.webp'
              }
              setNewImage={(val) => setNewHero(val)}
            />
          </div>
          <div className='flex flex-col gap-3'>
            <H2 children={headline} textColor='text-black' />
            <div className='flex items-center flex-wrap gap-5'>
              {authors && authors.length > 0 ? (
                authors.map((au) => <AuthorBlock author={au} pic={true} />)
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className='text-lg'>{subheadline}</div>
        </div>
      </div>
      <div className='col-span-4 border-l flex flex-col justify-between divide-y divide-black  border-l-black'>
        <div className='pb-2.5 pl-5'>
          <div className='text-xs uppercase tracking-widest font-semibold'>
            {sidebarHeadline}
          </div>
        </div>
        {lessons.map((les) => (
          <LessonPreviewMini
            key={les.id}
            title={les.title}
            authors={les.author}
            hero={les.screengrab ? les.screengrab : les.seoImage}
            date={les.backdate ? les.backdate : formatDate(les.createdAt)}
            slug={les.slug}
          />
        ))}
      </div>
    </div>
  );
};
