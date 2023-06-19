import React, { Component } from 'react';
class BindingFunctions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Bind the handleClick method to the component instance
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Update the state when the button is clicked
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }
  render() {
    return (
      <div>
        <h4>Binding Functions Example</h4>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

//bind
//this

export default BindingFunctions;

