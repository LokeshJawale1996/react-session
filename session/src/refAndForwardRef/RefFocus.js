import React, { useRef } from "react";

const RefFocus = () => {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <h4>Ref Example</h4>
      <input type="text" ref={inputRef}></input>
      <button onClick={handleClick}>Foucs Input</button>
    </div>
  );
};

export default RefFocus;
