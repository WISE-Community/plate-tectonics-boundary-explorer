import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import {
	REAL_EXAMPLES_TEXT,
	INIT_PLATE_STATES,
	BOUNDARY_STATES,
	examplesForState,
	backgroundForState,
	boundaryForState,
	STATE_TEXT
} from "../State";

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
			{INIT_PLATE_STATES.map(plateState =>
				BOUNDARY_STATES.map(boundaryState =>
					exampleButtonOfType(plateState, boundaryState,
						props.finishedRealExamples.includes(`${plateState}${boundaryState}`), props.onClick)
				))}
		</div>
	);
}
function exampleButtonOfType(plateState, boundaryState, finished, onClick) {
	const endState = `${plateState}${boundaryState}`;
	if (endState === "cod")
		return null;
	return (
		<Button
			key={endState}
			onClick={() => onClick(endState)}
			checked={finished}
			background={examplesForState(endState)}>
			{finished ? <React.Fragment>
				<div className="ComboInButton" key={plateState} style={{
					backgroundImage: `url(${backgroundForState(plateState)})`}}>
					<p>{STATE_TEXT[plateState]}</p>
				</div>
				<div className="ComboInButton" key={boundaryState} style={{
					left: "50%",
					backgroundImage: `url(${boundaryForState(boundaryState)})`}}>
					<p>{STATE_TEXT[boundaryState]}</p>
				</div>
			</React.Fragment> : null}
			<p>{REAL_EXAMPLES_TEXT[endState]}</p>
		</Button>);
}

export default RealExamplePanel;