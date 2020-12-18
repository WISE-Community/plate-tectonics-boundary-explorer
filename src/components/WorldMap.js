import React from "react";
import PropTypes from "prop-types";
import Map from "./backgrounds/map.jpg";
import AleutianAlaskaArcMask from "./backgrounds/aleutian-alaska-arc-mask.svg";
import HimalayasMask from "./backgrounds/himalayas-mask.svg";
import AndesMask from "./backgrounds/andes-mask.svg";
import EastAfricanRiftMask from "./backgrounds/east-african-rift-mask.svg";
import MidAtlanticRidgeMask from "./backgrounds/mid-atlantic-ridge-mask.svg";
import Check from "./backgrounds/check.svg";
import {END_PLATE_STATES, maskClassForState, maskForState} from "../State";

WorldMap.propTypes = {
	hide: PropTypes.bool,
	onClick: PropTypes.func,
	onHover: PropTypes.func,
	endHover: PropTypes.func,
	finishedRealExamples: PropTypes.array
};
function WorldMap(props) {
	if (props.hide)
		return null;
	return (
		<div className="WorldMap" style={{backgroundImage: `url(${Map})`}}>
			{END_PLATE_STATES.map(state => divForState(state, props))}
		</div>
	);
}

function divForState(state, props) {
	if (state === "cod")
		return null;
	return (
		<div className={maskClassForState(state)}
		     key={state}
		     style={{backgroundImage: `url(${maskForState(state)}`}}
		     onMouseEnter={event => props.onHover(event, state)}
		     onMouseLeave={props.endHover}
		     onClick={() => props.onClick(state)}>
			<img src={Check} hidden={!props.finishedRealExamples.includes(state)}/>
		</div>
	);
}

export default WorldMap;