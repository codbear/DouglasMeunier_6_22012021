import React from 'react';
import ReactDOM from 'react-dom';
import populateLocalStorage from 'sdk';
import App from './App';

populateLocalStorage();

ReactDOM.render(
  <App />,
  window.document.getElementById('root'),
);
