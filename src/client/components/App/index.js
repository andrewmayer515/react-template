import React, { useState, useEffect } from 'react';
import './style.scss';

const App = () => {
  const [sha, updateSHA] = useState('');
  useEffect(() => {
    const fetchSHA = async () => {
      fetch('/api/example')
        .then(res => res.json())
        .then(data => {
          updateSHA(data.sha);
        });
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
