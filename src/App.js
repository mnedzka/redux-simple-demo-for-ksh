import React, { Component } from 'react';
import './App.css';
import GreatGrandParent from './components/GreatGrandParent';

class App extends Component {
  state = {
    name: 'Pablo',
  };
  render() {
    return (
      <div className='App'>
        <GreatGrandParent name={this.state.name} />
      </div>
    );
  }
}

export default App;
