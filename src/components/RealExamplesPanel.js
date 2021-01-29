import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import {
  REAL_EXAMPLES_TEXT,
  examplesForState,
  backgroundForState,
  boundaryForState,
  splitEndState,
  STATE_TEXT
} from '../State';

RealExamplePanel.propTypes = {
  finishedRealExamples: PropTypes.array,
  hide: PropTypes.bool,
  hoverExample: PropTypes.string,
  hoverCoordinates: PropTypes.array
};

function RealExamplePanel(props) {
  if (props.hide || !props.hoverExample || props.hoverExample === '') return null;
  const [plateType, boundaryType] = splitEndState(props.hoverExample);
  const finished = props.finishedRealExamples.includes(props.hoverExample);
  return (
    <Button
      className="RealExamplePanel"
      style={{ top: props.hoverCoordinates[1], left: props.hoverCoordinates[0] }}
      disabled={true}
      background={examplesForState(props.hoverExample)}
    >
      {finished ? (
        <React.Fragment>
          <div
            className="ComboInButton"
            style={{
              backgroundImage: `url(${backgroundForState(plateType)})`
            }}
          >
            <p>{STATE_TEXT[plateType]}</p>
          </div>
          <div
            className="ComboInButton"
            style={{
              left: '50%',
              backgroundImage: `url(${boundaryForState(boundaryType)})`
            }}
          >
            <p>{STATE_TEXT[boundaryType]}</p>
          </div>
        </React.Fragment>
      ) : null}
      <p>{REAL_EXAMPLES_TEXT[props.hoverExample]}</p>
    </Button>
  );
}

export default RealExamplePanel;
