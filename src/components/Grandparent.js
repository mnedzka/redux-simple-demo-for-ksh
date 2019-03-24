import React, { Component } from 'react';
import Parent from './Parent';

class Grandparent extends Component {
  render() {
    return (
      <div>
        <Parent name={this.props.name} />
      </div>
    );
  }
}

export default Grandparent;
