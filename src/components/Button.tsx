import React from 'react';
import PropTypes from 'prop-types';

interface Props {
  buttonName: string,
  color: string,
  wide: boolean
}

const Button: React.FC<Props> = ({ buttonName, color, wide }) => {
  const styleButton = {
    backgroundColor: `${color}`,
    gridColumn: ''
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
  color: PropTypes.string.isRequired
};

Button.defaultProps = {
  color: 'orange',
};

export default Button;
