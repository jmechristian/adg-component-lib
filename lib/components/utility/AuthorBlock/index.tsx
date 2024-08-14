'use client';

interface AuthorBlockProps {
  pic?: boolean;
  small?: boolean;
  author: {
    name: string;
    headshot: string;
    linkedIn: string;
    id: string;
  };
}

export const AuthorBlock: React.FC<AuthorBlockProps> = ({
  author,
  pic = 'false',
  small,
}) => {
  return (
    <div
      key={author.id}
      className='flex items-center gap-1 cursor-pointer'
      onClick={() => window.open(author.linkedIn, '_blank')}
    >
      <div
        className={`${pic ? 'block' : 'hidden'} ${small ? 'w-5 h-5' : 'w-7 h-7'} rounded-full bg-center bg-cover`}
        style={{
          backgroundImage: `url(${author.headshot ? author.headshot : 'https://packschool.s3.amazonaws.com/avatar_default.jpeg'})`,
        }}
      ></div>
      <div className={`${small ? 'text-xs' : 'text-sm'} text-neutral-500`}>
        {author.name}
      </div>
    </div>
  );
};
