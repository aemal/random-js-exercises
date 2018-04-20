import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from './actions/counterActions';

const App = (props) => {

  const increment = (value) => {
    props.incrementCounter(value);
  }

  const decrement = (value) => {
    props.decrementCounter(value);
  }

  return (
    <div style={{textAlign: 'center'}}>
      <button onClick={increment.bind(this, 1)}>+</button>
      <div>Counter: {props.counterProps.counterValue}</div>
      <button onClick={decrement.bind(this, 1)}>-</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return ({ counterProps: state.counterState})
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(counterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
