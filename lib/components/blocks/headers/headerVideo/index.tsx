import { H2 } from '../../../../main';
import { AuthorBlock } from '../../../utility/AuthorBlock';
import '../../../../styles.css';
import { Author } from '../../../../defs';
// Define the props type

interface HeaderVideoHeroProps {
  headline: string;
  subheadline: string;
  centered: boolean;
  authors?: Author[];
  url: string;
}

export const HeaderVideoHero: React.FC<HeaderVideoHeroProps> = ({
  headline = 'Extended Producer Responsibility (EPR)',
  subheadline = 'Extended Producer Responsibility (EPR) in packaging design is a policy approach that holds manufacturers accountable for the entire lifecycle of their products, including end-of-life management. This means that producers are responsible for the collection, recycling, and disposal of their packaging materials, incentivizing them to design more sustainable and eco-friendly packaging solutions. EPR aims to reduce environmental impact and promote a circular economy by shifting the cost and responsibility of waste management from taxpayers to producers.',
  centered,
  authors,
  url,
}) => {
  return (
    <div
      className={`grid lg:grid-cols-2 items-center w-full gap-10 lg:gap-16 max-w-7xl mx-auto px-4 xl:px-0 ${centered ? 'text-center' : 'text-left'}`}
    >
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-3'>
          <H2 children={headline} textColor='text-black' />
          {authors && authors.length > 0 ? (
            <div className='flex items-center flex-wrap gap-5'>
              {authors.map((au) => (
                <AuthorBlock author={au} />
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className='text-lg'>{subheadline}</div>
      </div>
      <div className='flex items-center'>
        <div className='aspect-[16/9] w-full bg-black'>
          <iframe
            width='100%'
            height='100%'
            src={url && url}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
