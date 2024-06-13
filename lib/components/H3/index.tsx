import '../../../src/index.css';

// Define the props type
interface H3Props {
  children: string;
  /**
   * Tailwind string
   */
  textColor: string;
}

export const H3: React.FC<H3Props> = ({
  children = 'The is an H3 Headline.',
  textColor = 'text-black',
}) => {
  return <h3 className={`h3-base ${textColor}`}>{children}</h3>;
};
