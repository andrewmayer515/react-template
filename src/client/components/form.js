import React, { useState } from "react";
import "./style.scss";

const Form = () => {
  const [value, setValue] = useState("");

  const handleChange = event => {
    const { value } = event.target;
    setValue(value);
  };

  return (
    <input type="text" value={value} className="hey" onChange={handleChange} />
  );
};

export default Form;
