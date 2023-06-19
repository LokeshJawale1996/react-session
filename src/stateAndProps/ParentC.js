import React from "react";
import ChildC from "./ChildC";

const ParentC = () => {
  // const employee = [
  //   { name: "Lokesh Jawale", age: 26, designation: "Soft Engineer" },
  //   { name: "Ajit J", age: 27, designation: "Senior Soft Engineer" },
  //   { name: "Akshay P", age: 25, designation: "Technical Lead" },
  // ];
  return (
    <div>
      <ChildC firstName="lokesh" lastName='Jawale' />
      {/* <ChildC employee={employee} /> */}
    </div>
  );
};

export default ParentC;

//to pass multiple employee as props to a child component,you can use an array of objects and pass it from the parent component

//In this example,the "ParentC" defines an array called 'employee' that contains multiple objects,each representing a employee with their 'name','age','designation'

//The 'employee' array is passed as a prop to the 'ChildC' by adding the attribute 'employee={employee}' to ChildC tag
