import React from 'react'

const ChildC = (props) => {
  // const {employee} = props;
  const {firstName,lastName}= props;
  return (
    <div>
      {/* {employee.map((employee,index) => (
        <div key={index}>
          <h2>Name:{employee.name}</h2>
          <p>Age:{employee.age}</p>
          <p>designation:{employee.designation}</p>
        </div>
      ))} */}
      <p>{firstName}</p>
      <p>{lastName}</p>
    </div>
  )
}

export default ChildC;

//Within the 'Child' the 'employee' array is iterated using the 'map' function. For each employee in the array,their details are rendered using JSX.