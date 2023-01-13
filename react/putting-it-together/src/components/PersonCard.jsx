import React, { Component } from 'react';

class PersonCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      age : this.props.age
    }
  }

  render () {
    const increaseCount = () => {
      console.log("clicked");
      this.setState({age : this.props.age + 1})
    } 

    return (
      <div>
        <h1>{this.props.lastName}, {this.props.firstName}</h1>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {this.props.hairColor}</p>
        <button onClick={increaseCount}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
      </div>
    );
  }
}

export default PersonCard;