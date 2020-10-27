import React from "react";
import PropTypes from "prop-types";
import Plate from "./Plate";
import Mantle from "./Mantle";
import ControlPanel from "./ControlPanel";
import Sky from "./Sky";

HalfScreen.propTypes = {
    onClick: PropTypes.func,
    state: PropTypes.oneOf(["up", "down", "left", "right"])
}

function HalfScreen(props) {
    return (
        <div className="HalfScreen">
            <Sky/>
            <Plate/>
            <Mantle/>
            <ControlPanel onClick={props.onClick} state={props.state}/>
        </div>
    )
}

export default HalfScreen;