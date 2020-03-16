import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonName, color, wide }) => {
  const styleButton = {
    backgroundColor: `${color}`,
  };
  if (wide) {
    styleButton.gridColumn = '1 / span 2';
  }
  return (
    <div className="button" style={styleButton}>
      {buttonName}
    </div>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  wide: PropTypes.bool.isRequired,
  color: PropTypes.string,
};

Button.defaultProps = {
  color: 'orange',
};

export default Button;
