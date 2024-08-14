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
  return (
    <h2
      className={`font-semibold text-2xl md:text-4xl lg:text-5xl leading-tight lg:leading-[1.1em] tracking-[-0.04em] ${textColor}`}
    >
      {children}
    </h2>
  );
};
