import React, { Component } from 'react';
import Grandparent from './Grandparent';
import { FamilyProvider } from './Context';

class GreatGrandParent extends Component {
  state = {
    name: 'Pablo',
  };

  render() {
    return (
      <div>
        <FamilyProvider value={this.state.name}>
          <Grandparent />
        </FamilyProvider>
      </div>
    );
  }
}

export default GreatGrandParent;
