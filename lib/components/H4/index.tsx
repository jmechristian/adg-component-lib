import '../../styles.css';

// Define the props type
interface H4Props {
  children: string;
  /**
   * Tailwind string
   */
  textColor: string;
}

export const H4: React.FC<H4Props> = ({
  children = 'The is an H4 Headline.',
  textColor = 'text-black',
}) => {
  return (
    <h4
      className={`text-lg font-semibold md:text-xl leading-tight lg:leading-[1.1em] tracking-[-0.02em] ${textColor}`}
    >
      {children}
    </h4>
  );
};
