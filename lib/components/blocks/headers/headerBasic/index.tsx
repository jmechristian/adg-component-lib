import '../../../../../src/index.css';
import { H1 } from '../../../../main';
import { AuthorBlock } from '../../../utility/AuthorBlock';

// Define the props type

interface authorType {
  author: {
    name: string;
    headshot: string;
    linkedIn: string;
    id: string;
  };
}

interface HeaderBasicProps {
  headline: string;
  subheadline: string;
  centered: boolean;
  authors?: authorType[];
}

export const HeaderBasic: React.FC<HeaderBasicProps> = ({
  headline = 'Extended Producer Responsibility (EPR)',
  subheadline = 'Extended Producer Responsibility (EPR) in packaging design is a policy approach that holds manufacturers accountable for the entire lifecycle of their products, including end-of-life management. This means that producers are responsible for the collection, recycling, and disposal of their packaging materials, incentivizing them to design more sustainable and eco-friendly packaging solutions. EPR aims to reduce environmental impact and promote a circular economy by shifting the cost and responsibility of waste management from taxpayers to producers.',
  centered,
  authors,
}) => {
  return (
    <div
      className={`flex flex-col w-full gap-10 max-w-5xl mx-auto px-4 xl:px-0 ${centered ? 'text-center' : 'text-left'}`}
    >
      <div className='flex flex-col gap-3'>
        <H1 children={headline} textColor='text-black' />
        <div
          className={`flex items-center flex-wrap gap-5 ${centered ? 'justify-center' : ''}`}
        >
          {authors && authors.length > 0 ? (
            authors.map((au) => <AuthorBlock author={au.author} />)
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className='text-lg lg:text-xl leading-relaxed lg:leading-relaxed'>
        {subheadline}
      </div>
    </div>
  );
};
