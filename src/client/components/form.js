import React, { useState } from 'react';
import './style.scss';

const Form = () => {
  const [value, setValue] = useState('');
  const handleChange = event => setValue(event.target.value);

  return (
    <div>
      <input type="text" value={value} className="hey" onChange={handleChange} />
    </div>
  );
};

export default Form;
