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

//In the above example, we have a functional component FatArrowFunctions that uses the useState hook to manage the state. We declare the count state variable and the setCount function using array destructuring.

//We then declare the handleClick function using a fat arrow function. The fat arrow function automatically binds this to the lexical scope of the component, so you don't need to worry about manually binding it.

//Inside the handleClick function, we use the setCount function provided by the useState hook to update the count state by incrementing the previous count value.

//In the render method, we display the current count value and attach the handleClick function as the click event handler for the button using onClick={handleClick}.

//Using fat arrow functions in this way allows you to define functions within your React component without the need for explicit binding and ensures that the this context is automatically set correctly.
