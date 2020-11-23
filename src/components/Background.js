import React from "react";
import PropTypes from "prop-types";
import {INIT_PLATE_STATES, END_PLATE_STATES, backgroundForState} from "../State";


Background.propTypes = {
	hide: PropTypes.bool,
	plateState: PropTypes.oneOf([...INIT_PLATE_STATES, ...END_PLATE_STATES])
};
function Background(props) {
	if (props.hide)
		return null;
	return (
		<div className="Background">
			{backgroundForState(props.plateState)}
		</div>
	);
}


export default Background;