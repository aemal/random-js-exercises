import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CounterValueForm from './CounterValueForm';
import * as counterActions from './actions/counterActions';

const App = (props) => {

  const increment = (value) => {
    props.incrementCounter(value);
  }

  const decrement = (value) => {
    props.decrementCounter(value);
    console.log(props);
  }

  const formSubmit = (values) => {
    console.log("AAAA", values);
  }

  return (
    <div style={{textAlign: 'center'}}>
      <div>
        <CounterValueForm 
          formSubmit={formSubmit} 
        />
      </div>
      <div>
        <button onClick={increment.bind(this, 1)}>+</button>
        <div>Counter: {props.counterProps.counterValue}</div>
        <button onClick={decrement.bind(this, 1)}>-</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return ({ 
    counterProps: state.counterState,
    frmCounterValue: state.frmCounterValue
  })
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(counterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
