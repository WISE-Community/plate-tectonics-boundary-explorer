import React from 'react';
import PropTypes from 'prop-types';

LocationSummary.propTypes = {
  attempt: PropTypes.object,
  location: PropTypes.string
};

function LocationSummary(props) {
  return <p>{props.attempt.studentText}</p>;
}

export default LocationSummary;
