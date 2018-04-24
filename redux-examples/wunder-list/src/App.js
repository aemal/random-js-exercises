import React, { Component } from 'react';
import Rating from './Rating';
import Todo from './Todo';

class App extends Component {
  render() {
    return (
      <div>
        <Todo
          customComponents={Rating}
        />
      </div>
    );
  }
}

export default App;
