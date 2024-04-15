import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log('Constructor');
  }

  componentDidMount() {
    console.log('Component Did Mount');
  }
 
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should Component Update', nextProps, nextState);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Component Did Update');
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
  }

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    console.log('Render');
    return (
      <div>
        <h1>Component Lifecycle Demo</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment Count</button>
      </div>
    );
  }
}

export default LifecycleDemo;
