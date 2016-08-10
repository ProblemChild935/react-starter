import React from 'react';

/**
 * A counter button: tap the button to increase the counter
 */
class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }
  
  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }
  
  render() {
    return(
      <button
        onClick={ this.incrementCount.bind(this) }
      >
        Count: { this.state.count }
      </button>
    );
  }
}

export default Counter;
