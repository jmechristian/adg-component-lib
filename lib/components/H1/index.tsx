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
  return (
    <h1
      className={`text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] lg:leading-[1.1em] ${textColor}`}
    >
      {children}
    </h1>
  );
};
