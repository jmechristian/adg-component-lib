import { FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Dispatch, SetStateAction, useState } from 'react';
import { IconType } from 'react-icons';
import '../../../styles.css';

interface Links {
  link: string;
  text: string;
  icon: IconType;
}

interface DropDownSelectProps {
  links: Links[];
  backgroundColor: string;
  text: string;
}

export const DropDownSelect = ({
  links,
  backgroundColor,
  text,
}: DropDownSelectProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='flex items-center justify-center w-full'>
      <motion.div
        animate={open ? 'open' : 'closed'}
        className='relative w-full'
      >
        <button
          onClick={() => setOpen((pv) => !pv)}
          className={`flex items-center w-full gap-2 px-3 py-2  text-white ${backgroundColor} hover:${backgroundColor}/80 transition-colors border-2 border-black`}
        >
          <span className='font-medium'>{text}</span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: 'top' }}
          className='flex flex-col gap-2 p-2 border-2 border-black bg-white shadow-xl absolute top-[120%] w-full overflow-hidden'
        >
          {links.map((link) => (
            <Option setOpen={setOpen} Icon={link.icon} text={link.text} />
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({
  text,
  Icon,
  setOpen,
}: {
  text: string;
  Icon: IconType;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className='flex items-center gap-2 w-full p-2 font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer'
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: 'afterChildren',
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
