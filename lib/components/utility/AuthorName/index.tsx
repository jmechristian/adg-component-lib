'use client';
import { useEffect, useState } from 'react';
import { API, Amplify } from 'aws-amplify';
import { getAuthor } from '../../../../src/graphql/queries';

import awsExports from '../../../../src/aws-exports';

Amplify.configure(awsExports);

interface AuthorNameProps {
  id: string;
}

interface GetAuthorResponse {
  data: {
    getAuthor: {
      name: string;
    };
  };
}

export const AuthorName: React.FC<AuthorNameProps> = ({ id }) => {
  const [isName, setIsName] = useState('');

  useEffect(() => {
    const getName = async () => {
      const author = (await API.graphql({
        query: getAuthor,
        variables: { id: id },
      })) as GetAuthorResponse;

      setIsName(author.data.getAuthor.name);
    };

    if (id) {
      getName();
    }
  }, [id]);

  return <div className='text-sm'>{isName}</div>;
};
