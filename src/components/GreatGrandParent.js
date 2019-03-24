import React, { Component } from 'react';
import Grandparent from './Grandparent';

class GreatGrandParent extends Component {
  state = {
    name: 'Pablo',
  };

  render() {
    return (
      <div>
        <Grandparent name={this.state.name} />
      </div>
    );
  }
}

export default GreatGrandParent;
