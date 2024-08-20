import { H2 } from '../../../../main';
import { AuthorBlock } from '../../../utility/AuthorBlock';
import { ImageUpload } from '../../../../main';
import '../../../../../src/index.css';
// Define the props type

interface authorType {
  author: {
    name: string;
    headshot: string;
    linkedIn: string;
    id: string;
  };
}

interface HeaderTwoColumnHeroProps {
  headline: string;
  subheadline: string;
  centered: boolean;
  authors?: authorType[];
  hero: string;
  setNewHero?: (val: string) => void;
}

export const HeaderTwoColumnHero: React.FC<HeaderTwoColumnHeroProps> = ({
  headline = 'Extended Producer Responsibility (EPR)',
  subheadline = 'Extended Producer Responsibility (EPR) in packaging design is a policy approach that holds manufacturers accountable for the entire lifecycle of their products, including end-of-life management. This means that producers are responsible for the collection, recycling, and disposal of their packaging materials, incentivizing them to design more sustainable and eco-friendly packaging solutions. EPR aims to reduce environmental impact and promote a circular economy by shifting the cost and responsibility of waste management from taxpayers to producers.',
  centered,
  authors,
  hero,
  setNewHero,
}) => {
  return (
    <div
      className={`grid lg:grid-cols-2 items-center w-full gap-10 lg:gap-16 max-w-7xl mx-auto px-4 xl:px-0 ${centered ? 'text-center' : 'text-left'}`}
    >
      <div className='flex items-center'>
        <div className='aspect-[4/3] w-full'>
          <ImageUpload
            placeholderSrc={
              hero
                ? hero
                : 'https://packschool.s3.amazonaws.com/cadboard-plant.webp'
            }
            setNewImage={setNewHero ? (val) => setNewHero(val) : undefined}
          />
        </div>
      </div>
      <div className='flex flex-col gap-16'>
        <div className='flex flex-col gap-3'>
          <H2 children={headline} textColor='text-black' />
          <div className='flex items-center flex-wrap gap-5'>
            {authors && authors.length > 0 ? (
              authors.map((au) => <AuthorBlock author={au.author} />)
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className='text-lg'>{subheadline}</div>
      </div>
    </div>
  );
};
