import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const buttonNames = [
    'AC',
    '+/-',
    '%',
    '÷',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
  ];

  const names = buttonNames.map(name => (
    <Button buttonName={name} key={name} />
  ));
  return (
    <div>
      <div className="ButtonPanel">{names}</div>
    </div>
  );
};

export default ButtonPanel;
