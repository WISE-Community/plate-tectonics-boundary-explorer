import React from "react";
import PropTypes from "prop-types";
import Plate from "./Plate";
import Mantle from "./Mantle";
import ControlPanel from "./ControlPanel";
import Sky from "./Sky";
import PlateArc from "./PlateArc";

HalfScreen.propTypes = {
    onClick: PropTypes.func,
    controlPanelState: PropTypes.object,
    plateState: PropTypes.object,
    leftPanel: PropTypes.bool
}

function HalfScreen(props) {
    return (
        <div className="HalfScreen">
            <Sky/>
            <Plate leftPanel={props.leftPanel}>
                <PlateArc leftPanel={props.leftPanel} position={props.leftPanel ?
                    props.plateState.leftArc : props.plateState.rightArc}/>
            </Plate>
            <Mantle/>
            <ControlPanel onClick={props.onClick} state={props.controlPanelState}/>
        </div>
    )
}

export default HalfScreen;