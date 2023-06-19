import React,{useRef} from 'react'
import ChildComponent from './ChildComponent';
const ForwardRefFocus = () => {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
  }

  return (
    <div>
      <ChildComponent ref={inputRef}/>
      <button onClick={handleClick}>Focus Input</button>
    </div>
  )
}

export default ForwardRefFocus;
//3.The 'ForwardRefFocus' which is parent Component creates forward ref using 'useRef(null)'

//4.and passes it to 'ChildComponent' using 'ref' prop

//5.The 'handleClick' function in 'ForwardRefFocus' can still access and manipulate the input Field through the 'inputRef'