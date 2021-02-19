import React from 'react';
import ReactDOM from 'react-dom';
import populateLocalStorage from 'sdk';
import App from './App';

populateLocalStorage();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  window.document.getElementById('root'),
);
