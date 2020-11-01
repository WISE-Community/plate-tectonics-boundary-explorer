import React from "react";
import PropTypes from "prop-types";
import './PlateArc.css';

const VALID_POSITIONS = ["CenterDown", "CenterUp", "SideUp"];
PlateArc.propTypes = {
	leftPanel: PropTypes.bool,
	position: PropTypes.string
};

function PlateArc(props) {
	const panel = props.leftPanel ? "Left" : "Right";
	const active = VALID_POSITIONS.includes(props.position);

	return (
		<div className={`PlateArc${props.position}${panel} PlateArc`} hidden={!active}>
			<div className={`SpinningMask SpinningMask${panel}`}/>
			<div className={`InnerMask InnerMask${panel}`}/>
			<div className={`Mountain Mountain${panel}`}/>
		</div>
	);
}

export default PlateArc;