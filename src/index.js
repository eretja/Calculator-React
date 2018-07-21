import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Calculator from './Calculator';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
<App />
<Calculator/>
  </div>, document.getElementById('root'));
registerServiceWorker();
