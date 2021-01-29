import React from 'react';
import PropTypes from 'prop-types';
import Map from './backgrounds/map.jpg';
import Check from './backgrounds/check.svg';
import { END_PLATE_STATES, maskClassForState, maskForState } from '../State';

WorldMap.propTypes = {
  hide: PropTypes.bool,
  onClick: PropTypes.func,
  onHover: PropTypes.func,
  endHover: PropTypes.func,
  finishedRealExamples: PropTypes.array
};
function WorldMap(props) {
  if (props.hide) return null;
  return (
    <div className="WorldMap" style={{ backgroundImage: `url(${Map})` }}>
      {END_PLATE_STATES.map((state) => divForState(state, props))}
    </div>
  );
}

function divForState(state, props) {
  if (state === 'cod') return null;
  return (
    <React.Fragment key={state}>
      <div
        className={maskClassForState(state)}
        key={`${state}Mask`}
        style={{ backgroundImage: `url(${maskForState(state)}` }}
        onMouseEnter={(event) => props.onHover(event, state)}
        onMouseLeave={props.endHover}
        onClick={() => props.onClick(state)}
      />
      <img
        className={`Check ${maskClassForState(state)}`}
        src={Check}
        key={`${state}Check`}
        hidden={!props.finishedRealExamples.includes(state)}
      />
    </React.Fragment>
  );
}

export default WorldMap;
