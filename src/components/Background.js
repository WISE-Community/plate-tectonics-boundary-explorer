import React from "react";
import PropTypes from "prop-types";
import {ReactComponent as CC} from "./backgrounds/continental-continental.svg";
import {ReactComponent as CCC} from "./backgrounds/continental-continental-convergent.svg";
import {ReactComponent as CCD} from "./backgrounds/continental-continental-divergent.svg";
import {ReactComponent as CO} from "./backgrounds/continental-oceanic.svg";
import {ReactComponent as COC} from "./backgrounds/continental-oceanic-convergent.svg";
import {ReactComponent as OO} from "./backgrounds/oceanic-oceanic.svg";
import {ReactComponent as OOC} from "./backgrounds/oceanic-oceanic-convergent.svg";
import {ReactComponent as OOD} from "./backgrounds/oceanic-oceanic-divergent.svg";
import {INIT_PLATE_STATES, END_PLATE_STATES} from "../State";


Background.propTypes = {
	plateState: PropTypes.oneOf([...INIT_PLATE_STATES, ...END_PLATE_STATES])
};
function Background(props) {
	return (
		<div className="Background">
			{backgroundForState(props.plateState)}
		</div>
	);
}
function backgroundForState(state) {
	switch (state) {
		case "cc":
			return <CC/>;
		case "ccc":
			return <CCC/>;
		case "ccd":
			return <CCD/>;
		case "co":
		case "cod":
			return <CO/>;
		case "coc":
			return <COC/>;
		case "oo":
			return <OO/>;
		case "ooc":
			return <OOC/>;
		case "ood":
			return <OOD/>;
		default:
			return null;
	}
}

export default Background;