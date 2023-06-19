import React, { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <h4>State Example</h4>
      <button onClick={increment}>+</button>
      <h6>Count:{count}</h6>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default State;
