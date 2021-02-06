import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/main.scss';
import { HeaderComponent, FooterComponent } from './usingcomponents';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <HeaderComponent />
    <App />
    <FooterComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

