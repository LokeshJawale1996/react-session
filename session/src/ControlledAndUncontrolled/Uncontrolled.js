import React, { useRef } from 'react';

const Uncontrolled = () => {
  const inputRef = useRef();

  const handleClick = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
       <h4>Uncontrolled Component Example</h4>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Get Value</button>
    </div>
  );
}
export default Uncontrolled;

