import { motion } from 'framer-motion';
import { ProjectDetail } from '../../Utility/ProjectDetail';

export const TwoColIntro = ({
  size,
  subcategory,
  project_type,
  building_type,
  description,
  collaborators,
  id,
}: {
  description: string;
  collaborators: string;
  size: string;
  subcategory: string;
  project_type: string;
  building_type: string;
  id: string;
}) => {
  return (
    <div className='w-full max-w-6xl mx-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <motion.div
          key={id}
          className='flex flex-col lg:col-span-9 mb-6 lg:pr-1'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className='font-brand-serif text-2xl md:text-2xl lg:text-3xl leading-tight md:leading-snug lg:leading-snug lg:pr-3 mb-4 -mt-2'>
            {description}
          </div>
          <div className='text-xs text-gray-400'>{collaborators}</div>
        </motion.div>
        <div className='lg:col-span-3 flex flex-col gap-1'>
          <ProjectDetail name={'Size'} detail={size} dividers />
          <ProjectDetail name={'Category'} detail={subcategory} dividers />
          <ProjectDetail name={'Project Type'} detail={project_type} dividers />
          <ProjectDetail
            name={'Building Type'}
            detail={building_type}
            dividers
          />
        </div>
      </div>
    </div>
  );
};
