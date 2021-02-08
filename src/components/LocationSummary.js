import React from 'react';
import PropTypes from 'prop-types';
import './LocationSummary.css';

LocationSummary.propTypes = {
  attempt: PropTypes.object,
  location: PropTypes.string,
  showLocationText: PropTypes.bool,
  showBoundarySelection: PropTypes.bool,
  showStudentText: PropTypes.bool
};

function LocationSummary(props) {
  const endStateToText = {
    'ccc': 'Continental-Continental, Convergent',
    'ccd': 'Continental-Continental, Divergent',
    'coc': 'Continental-Oceanic, Convergent',
    'cod': 'Continental-Oceanic, Divergent',
    'ooc': 'Oceanic-Oceanic, Convergent',
    'ood': 'Oceanic-Oceanic, Divergent'
  };

  function getLocationText() {
    if (props.showLocationText) {
      return (
        <h4>{props.attempt.selectedExampleText}</h4>
      );
    }
  }

  function getBoundarySelection() {
    if (props.showBoundarySelection) {
      const isCorrectHtml = props.attempt.isCorrect ? 
          <span class="correct">(Correct)</span> :
          <span class="incorrect">(Incorrect)</span>;
      return (
        <p><strong>Predicted Boundary Type:</strong> {endStateToText[props.attempt.endState]} {isCorrectHtml}</p>
      );
    }
  }

  function getStudentText() {
    if (props.showStudentText) {
      return (
        <p><strong>Explanation:</strong> "{props.attempt.studentText}"</p>
      );
    }
  }
  return (
    <div className="Location">
      {(() => { 
        if (props.attempt) {
          return (
            <div className="attempt">
              { getLocationText() }
              { getBoundarySelection() }
              { getStudentText() }
            </div>
          );
        } else {
          return (
            <div className="attempt no-data">You haven't explored this landmark. Please go back to the model to enter a prediction.</div>
          );
        }
      })()}
    </div>
  );
}

export default LocationSummary;
