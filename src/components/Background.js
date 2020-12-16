import React from "react";
import PropTypes from "prop-types";
import {INIT_PLATE_STATES, END_PLATE_STATES, BOUNDARY_STATES, backgroundForState} from "../State";
import Convection from "./backgrounds/convection.svg";

Background.propTypes = {
	hide: PropTypes.bool,
	plateState: PropTypes.oneOf(["", ...INIT_PLATE_STATES, ...END_PLATE_STATES]),
	boundaryState: PropTypes.oneOf(["", ...BOUNDARY_STATES]),
	frame: PropTypes.number
};
function Background(props) {
	if (props.hide)
		return null;

	const leftConvectionClass = props.boundaryState === "c" ? "RotateCW" : "RotateCCW";
	const rightConvectionClass = props.boundaryState === "c" ? "RotateCCW" : "RotateCW";
	const hideConvection = props.boundaryState === "";
	const hidePlateState = props.plateState === "";

	return (
		<div className="BackgroundContainer">
			<img hidden={hideConvection} className={`Convection ConvectionLeft ${leftConvectionClass}`} src={Convection}/>
			<img hidden={hideConvection} className={`Convection ConvectionRight ${rightConvectionClass}`} src={Convection}/>
			{hidePlateState ? "" :
				<img className="Background" src={backgroundForState(props.plateState, props.frame)}/>}
		</div>
	);
}


export default Background;