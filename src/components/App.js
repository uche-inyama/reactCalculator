import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

const App = () => (
  <div className="app">
    <Display result="" />
    <ButtonPanel />
  </div>
);

export default App;
