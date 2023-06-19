import React,{useRef} from 'react'
import ChildComponent from './ChildComponent';
const ForwardRefFocus = () => {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
  }

  return (
    <div>
       <h4>Forward Ref Example</h4>
      <ChildComponent ref={inputRef}/>
      <button onClick={handleClick}>Focus Input</button>
    </div>
  )
}

export default ForwardRefFocus;
