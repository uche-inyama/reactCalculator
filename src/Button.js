import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonName }) => <div className="button">{buttonName}</div>;

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Button;
