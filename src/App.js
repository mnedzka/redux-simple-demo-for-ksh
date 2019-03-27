import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onReset} className='btn btn-primary btn-sm m-2'>
          Reset
        </button>
        <Counter
          key={counter.id}
          onDelete={this.props.onDelete}
          onIncrement={this.props.onIncrement}
          onDecrement={this.props.onDecrement}
          counter={counter}
        />
      </div>
    );
  }
}

export default App;
