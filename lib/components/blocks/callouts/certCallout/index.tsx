import { useState } from 'react';
import { BrutalButton } from '../../../../main';
import { H2 } from '../../../H2';
import { APCCard, CPSCard, CSPCard, FPCCard, CMPMCard } from '../../../../main';
import '../../../../styles.css';

type CertType = 'CMPM' | 'CPS' | 'APC' | 'CSP' | 'FPC';

interface CertCallout {
  headline: string;
  subheadline: string;
  linkText: string;
  cert: CertType;
  link: string;
  cardClickHandler: (link: string, cert: CertType) => void;
}

export const CertCallout: React.FC<CertCallout> = ({
  headline,
  subheadline,
  linkText,
  cert,
  link,
  cardClickHandler,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const certCardHandler = (cert: CertType) => {
    switch (cert) {
      case 'APC':
        return <APCCard hovering={isHovering} />;
      case 'CPS':
        return <CPSCard hovering={isHovering} />;
      case 'CSP':
        return <CSPCard hovering={isHovering} />;
      case 'FPC':
        return <FPCCard hovering={isHovering} />;
      case 'CMPM':
        return <CMPMCard hovering={isHovering} />;
      default:
        return 'Nothing Passed';
    }
  };

  return (
    <div
      className='w-full border-y-2 py-5 border-black lg:border-2 lg:rounded-2xl bg-base-brand/60 max-w-7xl  mx-auto'
      id='fpc'
    >
      <div className='flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-24 px-5 max-w-xl lg:max-w-6xl mx-auto'>
        <div className='flex flex-col gap-4'>
          <H2 children={headline} textColor='text-neutral-900' />
          <div className='text-lg'>{subheadline}</div>
          <div
            className='w-fit'
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <BrutalButton
              text={linkText}
              background={'bg-white'}
              textColor={'text-black'}
              link={link}
            />
          </div>
        </div>
        <div className='w-full grid place-items-center'>
          <div
            className='w-full aspect h-full max-w-[380px] cursor-pointer'
            onClick={() => cardClickHandler(link, cert)}
          >
            {certCardHandler(cert)}
          </div>
        </div>
      </div>
    </div>
  );
};
