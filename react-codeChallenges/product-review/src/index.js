import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


if (module.hot) {
  module.hot.accept('./container/App', () => {
    const NextApp = require('./container/App').default;
    ReactDOM.render(
      <NextApp />,
      document.getElementById('root')
    )
  });
}
