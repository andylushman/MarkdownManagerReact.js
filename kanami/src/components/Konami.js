import React, { Component } from 'react';
import Mousetrap from 'mousetrap';

class Kanami extends Component {
  constructor(props){
    super(props);
    this.popUp = this.popUp.bind(this);
  }

  componentDidMount(){
    Mousetrap.bind([`1 2 3 4`, `up up down down left right b a`], this.popUp);
  }

  componentWillUnmount(){
    Mousetrap.unbind([`1 2 3 4`, `up up down down left right b a`]);
  }

  popUp() {
    alert(`You inputted the Konami code ${this.props.name.length > 1 ? `, ${this.props.name}!` : `!`}`);
  }


  render() {
    return (
      <div>Hello, {this.props.name}! This is your Konami component! </div>
    );
  }
}

export default Kanami;
