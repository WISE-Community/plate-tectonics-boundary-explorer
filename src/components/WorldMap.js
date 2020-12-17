import React from "react";
import PropTypes from "prop-types";
import Map from "./backgrounds/map.jpg";
import AleutianAlaskaArcMask from "./backgrounds/aleutian-alaska-arc-mask.svg";
import HimalayasMask from "./backgrounds/himalayas-mask.svg";
import AndesMask from "./backgrounds/andes-mask.svg";
import EastAfricanRiftMask from "./backgrounds/east-african-rift-mask.svg";
import MidAtlanticRidgeMask from "./backgrounds/mid-atlantic-ridge-mask.svg";

WorldMap.propTypes = {
	hide: PropTypes.bool,
	onClick: PropTypes.func,
	onHover: PropTypes.func,
	endHover: PropTypes.func
};
function WorldMap(props) {
	if (props.hide)
		return null;
	return (
		<div className="WorldMap" style={{backgroundImage: `url(${Map})`}}>
			<div className="AleutianAlaskaArcMask" style={{backgroundImage: `url(${AleutianAlaskaArcMask}`}}
			     onMouseEnter={event => props.onHover(event, "ooc")}
				 onMouseLeave={props.endHover}
			     onClick={() => props.onClick("ooc")} />
			<div className="HimalayasMask" style={{backgroundImage: `url(${HimalayasMask}`}}
			     onMouseEnter={event => props.onHover(event, "ccc")}
			     onMouseLeave={props.endHover}
			     onClick={() => props.onClick("ccc")}/>
			<div className="AndesMask" style={{backgroundImage: `url(${AndesMask}`}}
			     onMouseEnter={event => props.onHover(event, "coc")}
			     onMouseLeave={props.endHover}
			     onClick={() => props.onClick("coc")}/>
			<div className="EastAfricanRiftMask" style={{backgroundImage: `url(${EastAfricanRiftMask}`}}
			     onMouseEnter={event => props.onHover(event, "ccd")}
			     onMouseLeave={props.endHover}
			     onClick={() => props.onClick("ccd")}/>
			<div className="MidAtlanticRidgeMask" style={{backgroundImage: `url(${MidAtlanticRidgeMask}`}}
			     onMouseEnter={event => props.onHover(event, "ood")}
			     onMouseLeave={props.endHover}
			     onClick={() => props.onClick("ood")}/>
		</div>
	);
}

export default WorldMap;