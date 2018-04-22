import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as counterActionTypes from './constants/counterConsts';


class App extends Component {
  state = { counter: 0 };

  increment() {
    this.props.dispatch({
      type: counterActionTypes.INC, 
      value: 1
    });
  }

  decrement() {
    this.props.dispatch({
      type: counterActionTypes.DEC, 
      value: 1
    });
  }

  render() {
    
    return (
      <div style={{textAlign: 'center'}}>
        <button onClick={this.increment.bind(this)}>+</button>
        <div>Counter: {this.props.counterProps.counterValue}</div>
        <button onClick={this.decrement.bind(this)}>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({ counterProps: state.counterState})
}

export default connect(mapStateToProps, null)(App);
