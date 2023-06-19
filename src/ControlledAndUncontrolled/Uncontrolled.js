import React, { useRef } from 'react';

const Uncontrolled = () => {
  const inputRef = useRef();

  const handleClick = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Get Value</button>
    </div>
  );
}
export default Uncontrolled;

//uncontrolled components allow the input element to maintain its own state without being directly controlled by react
// the component relies on a ref to access the input's value when needed

//In this example, the input elemnt  doesn't have a value prop.
//Instead the input can be accessed using the inpurRef.current.value properly.
//when the button is clicked,the handleClick function retrieves the value from the input using the ref and performs the desired action
