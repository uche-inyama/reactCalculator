import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
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

  function handleClick(buttonName) {
    return clickHandler(buttonName);
  }

  return (
    <div className="ButtonPanelComponent">
      <div className="ButtonPanel">
        {buttonNames.map(buttonName => (
          <Button
            clickHandler={handleClick}
            buttonName={buttonName}
            key={`name_${buttonName}`}
            wide={buttonName === '0'}
            color={
              buttonName !== '+'
              && buttonName !== '-'
              && buttonName !== 'x'
              && buttonName !== '÷'
              && buttonName !== '='
                ? '#d3d3d3'
                : 'orange'
            }
          />
        ))}
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
export default ButtonPanel;
