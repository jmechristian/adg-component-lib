import '../../../src/index.css';

// Define the props type
interface H1Props {
  children: string;
  /**
   * Tailwind string
   */
  textColor: string;
}

export const H1: React.FC<H1Props> = ({
  children = 'The is an H1 Headline.',
  textColor = 'text-black',
}) => {
  return <h1 className={`h1-base ${textColor}`}>{children}</h1>;
};
