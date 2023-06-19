import React, { useState } from "react";
const FatArrowfunctions = () => {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <h4>Fat Arrow funtions Example</h4>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
export default FatArrowfunctions;

