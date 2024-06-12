import React, { useState } from 'react';
import generateRandomString from '../utils/randomString';

const Home = () => {
  const [randomString, setRandomString] = useState('');

  const handleGenerateClick = () => {
    const newRandomString = generateRandomString(10);
    setRandomString(newRandomString);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>Generate Random String</h1>
      <button onClick={handleGenerateClick} style={{ marginBottom: '20px', padding: '10px 20px' }}>
        Generate
      </button>
      <p style={{ fontSize: '20px', fontFamily: 'monospace' }}>{randomString}</p>
    </div>
  );
};

export default Home;

