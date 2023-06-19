import React from 'react'

const Fragment = () => {
  return (
    //  <></>
    <React.Fragment>
        <h1>Hello Guys</h1>
        <p>Have a good day</p>
        <p>Bye....</p>
    </React.Fragment>

  )
}

export default Fragment;
//when this component render no extra wrapping element created 

//it is prefereed when you want to return multiple elements from a component
//without introducing an extra wrapping element;

//useFul in following cases:
//1)Styling:Fragments help to maintain more precise control over css styling by avoiding an extra wrapper element.
//2)Clean DOM structure:avoid necessary nesting.this is beneficial for readability and working with tools.
//3)Performance:Fragments can aslo contribute to better performance by reducing the number of unneecessary nodes in the DOM.
