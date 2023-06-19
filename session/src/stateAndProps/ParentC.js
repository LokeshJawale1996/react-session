import React from "react";
import ChildC from "./ChildC";

const ParentC = () => {
  const employee = [
    { name: "Lokesh Jawale", age: 26, designation: "Soft Engineer" },
    { name: "Ajit J", age: 27, designation: "Senior Soft Engineer" },
    { name: "Akshay P", age: 25, designation: "Technical Lead" },
  ];
  return (
    <div>
      <h4>Props Example</h4>
      {/* <ChildC firstName="lokesh" lastName="Jawale" /> */}
      <ChildC employee={employee} />
    </div>
  );
};

export default ParentC;
