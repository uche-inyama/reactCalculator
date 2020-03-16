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
  return (
    <div className="ButtonPanelComponent">
      <div className="ButtonPanel">
        {buttonNames.map(name => (
          <Button
            buttonName={name}
            key={`name_${name}`}
            wide={name === '0'}
            color={
              name !== '+'
              && name !== '-'
              && name !== 'x'
              && name !== '÷'
              && name !== '='
                ? '#d3d3d3'
                : 'orange'
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ButtonPanel;
