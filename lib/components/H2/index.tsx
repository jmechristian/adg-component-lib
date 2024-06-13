import '../../../src/index.css';

// Define the props type
interface H2Props {
  children: string;
  /**
   * Tailwind string
   */
  textColor: string;
}

export const H2: React.FC<H2Props> = ({
  children = 'The is an H2 Headline.',
  textColor = 'text-black',
}) => {
  return <h2 className={`h2-base ${textColor}`}>{children}</h2>;
};
