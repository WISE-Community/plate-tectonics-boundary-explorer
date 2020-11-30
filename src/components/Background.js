import React from "react";
import PropTypes from "prop-types";
import {INIT_PLATE_STATES, END_PLATE_STATES, BOUNDARY_STATES, backgroundForState} from "../State";
import Convection from "./backgrounds/convection.svg";

Background.propTypes = {
	hide: PropTypes.bool,
	plateState: PropTypes.oneOf([...INIT_PLATE_STATES, ...END_PLATE_STATES]),
	boundaryState: PropTypes.oneOf(["", ...BOUNDARY_STATES])
};
function Background(props) {
	if (props.hide)
		return null;

	const leftConvectionClass = props.boundaryState === "c" ? "RotateCW" : "RotateCCW";
	const rightConvectionClass = props.boundaryState === "c" ? "RotateCCW" : "RotateCW";
	const hideConvection = props.boundaryState === "";

	return (
		<div className="BackgroundContainer">
			<img hidden={hideConvection} className={`Convection ConvectionLeft ${leftConvectionClass}`} src={Convection}/>
			<img hidden={hideConvection} className={`Convection ConvectionRight ${rightConvectionClass}`} src={Convection}/>
			<img className="Background" src={backgroundForState(props.plateState)}/>
		</div>
	);
}


export default Background;