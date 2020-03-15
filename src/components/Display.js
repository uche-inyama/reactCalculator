import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div className="displayComponent">{result}</div>
);

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
