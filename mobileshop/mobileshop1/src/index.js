import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HeaderComponent from './usingcomponents/HeaderComponent';
import FooterComponent from './usingcomponents/FooterComponent';

ReactDOM.render(
  <React.StrictMode>
    <HeaderComponent />
    <App />
    <FooterComponent />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
