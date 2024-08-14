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
  return (
    <h3
      className={`font-semibold text-xl md:text-2xl lg:text-3xl leading-tight lg:leading-[1.1em] tracking-[-0.03em] ${textColor}`}
    >
      {children}
    </h3>
  );
};
