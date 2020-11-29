import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import {REAL_EXAMPLES_TEXT, END_PLATE_STATES, examplesForState} from "../State";

RealExamplePanel.propTypes = {
	finishedRealExamples: PropTypes.array,
	hide: PropTypes.bool,
	onClick: PropTypes.func
}

function RealExamplePanel(props) {
	if (props.hide)
		return null;
	return (
		<div className="RealExamplePanel">
			{END_PLATE_STATES.map(state => exampleButtonOfType(state, props.finishedRealExamples.includes(state), props.onClick))}
		</div>
	);
}
function exampleButtonOfType(type, finished, onClick) {
	if (type === "cod")
		return null;
	return <Button
		key={type}
		onClick={() => onClick(type)}
		checked={finished}
		background={examplesForState(type)}>
		<p>{REAL_EXAMPLES_TEXT[type]}</p>
	</Button>
}

export default RealExamplePanel;