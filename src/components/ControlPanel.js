import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import {INIT_PLATE_STATES, END_PLATE_STATES, BOUNDARY_STATES, STATE_TEXT} from "../State";

ControlPanel.propTypes = {
    onClick: PropTypes.func,
    plateState: PropTypes.oneOf([...INIT_PLATE_STATES, ...END_PLATE_STATES]),
    boundaryState: PropTypes.oneOf([...BOUNDARY_STATES, ""])
}

function ControlPanel(props) {
    if (!INIT_PLATE_STATES.includes(props.plateState))
        return null;

    return (
        <React.Fragment>
            <div className="PlateButtons">
                {INIT_PLATE_STATES.map(state => plateButtonOfType(props.plateState, state, props.onClick))}
            </div>
            <div className="BoundaryButtons">
                {BOUNDARY_STATES.map(state => boundaryButtonOfType(props.boundaryState, state, props.onClick))}
            </div>
        </React.Fragment>
    );
}
function plateButtonOfType(plateState, type, onClick) {
    return <Button key={type}
                   onClick={() => onClick(type)}
                   selected={plateState === type}>{STATE_TEXT[type]}</Button>
}
function boundaryButtonOfType(boundaryState, type, onClick) {
    return <Button key={type}
                   onClick={() => onClick(type)}
                   selected={boundaryState === type}>{STATE_TEXT[type]}</Button>
}

export default ControlPanel;