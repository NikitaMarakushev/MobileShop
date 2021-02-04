import React from 'react';
import { Route } from 'react-router-dom';
import { HeaderComponent } from './usingcomponents';

function App() {
  return (
    <div>
      <HeaderComponent />
      <p>Data</p> 
    </div>
  );
}

export default App;
