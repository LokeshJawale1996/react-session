import React, { useState } from "react";
const Controlled = () => {
  const [inputValue, setInputValue] = useState("");
  
  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };
  return (
    <div>
      <h4>Controlled Component Example</h4>
      <input type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
};
export default Controlled;

