import { useEffect, useState } from 'react';
import './App.css';
import { AuthorName } from '../lib/main';
import { Amplify } from 'aws-amplify';
import awsConfig from './aws-exports';

Amplify.configure(awsConfig);

function App() {
  return (
    <>
      <AuthorName id='41f53c00-b19f-43ab-ae79-763cb4c88dc4' />
    </>
  );
}

export default App;
