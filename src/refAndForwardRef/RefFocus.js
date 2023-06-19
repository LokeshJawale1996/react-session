import React,{useRef} from 'react'

const RefFocus = () => {
    const inputRef = useRef(null);
    const handleClick = () => {
        inputRef.current.focus();
    }
  return (
    <div>
        <input type='text' ref={inputRef}></input>
        <button onClick={handleClick}>Foucs Input</button>
    </div>
  )
}

export default RefFocus;

//In this example ,we create a regular ref using 'useRef(null)'. 
//We attach this ref to the input element using 'ref' prop.
//when the button is clicked the 'handleClick' function is called, 
//which uses the 'inputRef' to focus the input field.
//use when you need to access a DOM element.

