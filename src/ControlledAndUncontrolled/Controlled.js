import React, { useState } from 'react';
const Controlled= () => {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (event) => {
    setInputValue(event.target.value);
    // console.log(inputValue)
  };
  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
    />
  );
}
export default Controlled;

//controlled components are those in which the value of the input element is controlled by React state
//The state value is updated whenever the user interacts with the input 
//and the value is passed to the input as a prop


//In this example ,the value of the input is controlled by the 'inputValue' state variable.
// the 'handleChange' function is called whenever the user types in the input,
//updating the state value accordingly
//the input value is set though the 'value' prop, which reflects the value stored in the state


