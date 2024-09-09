import { BrutalButton } from '../../../../main';
import { H2 } from '../../../H2';
import '../../../../styles.css';

interface BasicCallout {
  headline: string;
  subheadline: string;
  linkText: string;
  link: string;
}

export const BasicCallout: React.FC<BasicCallout> = ({
  headline,
  subheadline,
  linkText,
  link,
}) => {
  return (
    <div className='flex flex-col gap-5 text-center px-5 xl:px-0 max-w-xl lg:max-w-4xl mx-auto lg:pt-10'>
      <H2 children={headline} textColor='text-neutral-900' />
      <div className='w-full text-center text-xl'>{subheadline}</div>
      <div className='w-fit mx-auto mt-3'>
        <BrutalButton
          link={link}
          background={'bg-clemson'}
          text={linkText}
          textColor={'text-black'}
        />
      </div>
    </div>
  );
};
