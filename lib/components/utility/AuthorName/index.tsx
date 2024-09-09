'use client';
import '../../../styles.css';
interface AuthorNameProps {
  name: string;
}

export const AuthorName: React.FC<AuthorNameProps> = ({ name }) => {
  return <div className='text-sm'>{name}</div>;
};
