import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  buttonName, color, wide, clickHandler,
}) => {
  const styleButton = {
    backgroundColor: `${color}`,
  };

  if (wide) {
    styleButton.gridColumn = '1 / span 2';
  }
  return (
    <button
      className="button"
      type="button"
      style={styleButton}
      onClick={() => {
        console.log(buttonName);
        clickHandler(buttonName);
      }}
    >
      {buttonName}
    </button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  wide: PropTypes.bool.isRequired,
  color: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'orange',
};

export default Button;
