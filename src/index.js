import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWeb from './reportToWeb';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWeb();
