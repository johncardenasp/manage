import React from 'react';
import ReactDOM from 'react-dom';

import './global.css';

import App from './components/App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

reportWebVitals();
