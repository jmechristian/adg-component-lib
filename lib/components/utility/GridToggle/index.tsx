import { MdApps, MdDehaze } from 'react-icons/md';
import '../../../styles.css';
// Define the props type
interface GridToggleProps {
  isTable: boolean;
  toggleValue: (value: boolean) => boolean;
}

export const GridToggle: React.FC<GridToggleProps> = ({
  isTable,
  toggleValue,
}) => {
  return (
    <div className='grid grid-cols-2 w-fit'>
      <div
        className={`w-10 h-10 ${
          isTable ? 'bg-black' : 'bg-neutral-300'
        } flex items-center justify-center cursor-pointer`}
        onClick={(isTable) => toggleValue(isTable ? false : true)}
      >
        <MdDehaze color={isTable ? 'white' : 'gray'} size={24} />
      </div>
      <div
        className={`w-10 h-10 ${
          isTable ? 'bg-neutral-300' : 'bg-black'
        } flex items-center justify-center cursor-pointer`}
        onClick={(isTable) => toggleValue(isTable ? true : false)}
      >
        <MdApps color={isTable ? 'gray' : 'white'} size={24} />
      </div>
    </div>
  );
};
