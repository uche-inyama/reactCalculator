import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import Calculate from '../logic/calculate';

const App = () => (
  <div className="app">
    <Display result="" />
    <ButtonPanel />
  </div>
);

export default App;
