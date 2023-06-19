import React,{forwardRef} from 'react'

const ChildComponent = forwardRef((props,ref) => {
    return <input type='text' ref={ref}></input>
})

export default ChildComponent;

//1.in this example ,we define a 'ChildComponent' that is wrapped in the 'forwardRef' function
//2.this allows the 'ChildComponent' to receive the 'ref' prop from Parent Component.

