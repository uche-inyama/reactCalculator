import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => <div className="">{result}</div>;

Display.defaultProps = {
  result: 'o',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
