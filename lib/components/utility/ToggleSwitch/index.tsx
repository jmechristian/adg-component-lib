import { motion } from 'framer-motion';

const TOGGLE_CLASSES =
  'text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10';

interface ToggleSwitchProps {
  toggleValue: (value: boolean) => boolean;
  selected: boolean;
  label1: string;
  label2: string;
}

export const ToggleSwitch = ({
  toggleValue,
  selected,
  label1,
  label2,
}: ToggleSwitchProps) => {
  return (
    <div
      className={`grid place-content-center rounded-2xl transition-colors bg-white/10`}
    >
      <SliderToggle
        selected={selected}
        toggleValue={toggleValue}
        label1={label1}
        label2={label2}
      />
    </div>
  );
};

const SliderToggle = ({
  selected,
  toggleValue,
  label1,
  label2,
}: {
  selected: boolean;
  toggleValue: (value: boolean) => boolean;
  label1: string;
  label2: string;
}) => {
  return (
    <div className='relative flex w-fit items-center rounded-full'>
      <button
        className={`${TOGGLE_CLASSES} ${
          selected ? 'text-neutral-500' : 'text-white'
        }`}
        onClick={() => {
          toggleValue(selected ? false : true);
        }}
      >
        <span className='relative z-10'>{label1}</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          selected ? 'text-white' : 'text-neutral-500'
        }`}
        onClick={() => {
          toggleValue(selected ? false : true);
        }}
      >
        <span className='relative z-10'>{label2}</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected ? 'justify-end' : 'justify-start'
        }`}
      >
        <motion.span
          layout
          transition={{ type: 'spring', damping: 15, stiffness: 250 }}
          className='h-full w-1/2 rounded-full bg-brand-indigo'
        />
      </div>
    </div>
  );
};
