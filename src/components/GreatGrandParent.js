import React, { Component } from 'react';
import Grandparent from './Grandparent';

class GreatGrandParent extends Component {
  render() {
    return (
      <div>
        <Grandparent name={this.props.name} />
      </div>
    );
  }
}

export default GreatGrandParent;
