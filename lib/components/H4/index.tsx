import '../../../src/index.css';

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
  return <h4 className={`h4-base ${textColor}`}>{children}</h4>;
};
