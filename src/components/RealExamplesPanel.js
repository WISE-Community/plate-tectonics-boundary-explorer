import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import {REAL_EXAMPLES_TEXT, END_PLATE_STATES, examplesForState} from "../State";

RealExamplePanel.propTypes = {
	hide: PropTypes.bool,
	onClick: PropTypes.func
}

function RealExamplePanel(props) {
	if (props.hide)
		return null;
	return (
		<div className="RealExamplePanel">
			{END_PLATE_STATES.map(state => exampleButtonOfType(state, props.onClick))}
		</div>
	);
}
function exampleButtonOfType(type, onClick) {
	if (type === "cod")
		return null;
	return <Button key={type}
	               onClick={() => onClick(type)}
	               background={examplesForState(type)}>{REAL_EXAMPLES_TEXT[type]}</Button>
}

export default RealExamplePanel;