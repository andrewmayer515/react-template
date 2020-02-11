import React, { useState, useEffect } from 'react';
import './style.scss';

const App = () => {
  const [sha, updateSHA] = useState('');
  useEffect(() => {
    const fetchSHA = async () => {
      const response = await fetch('/api/example');
      const json = await response.json();
      updateSHA(json.sha);
    };

    fetchSHA();
  }, []);

  return (
    <div>
      <span>React Template</span>
      <span>{`SHA: ${sha}`}</span>
    </div>
  );
};

export default App;
