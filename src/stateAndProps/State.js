//step 1: import 'useState hook from the React Library

//step 2: Declare a state variable using 'useState' hook
//hooks takes an initial value as argument and returns an array with two elements: 
//the current state value and a function to update that value

//step 3: Use the "state" variable in your component JSX to display state value.

//step 4: When we want to update the state,call the 'setState' function and pass in the new value

import React,{useState} from 'react'

const State = () => {
    const [count,setCount] = useState(0);
    const increment = () => {
        setCount(count +1)
     }    
    const decrement= () => {
        if(count > 0 ){
            setCount(count -1)
         }
    }
  return (
    <div>
        <button onClick={increment}>+</button>
        <h1>Count:{count}</h1>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default State;
