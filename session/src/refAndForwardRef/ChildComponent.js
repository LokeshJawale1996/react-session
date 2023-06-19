import React,{forwardRef} from 'react'

const ChildComponent = forwardRef((props,ref) => {
    return <input type='text' ref={ref}></input>
})

export default ChildComponent;

