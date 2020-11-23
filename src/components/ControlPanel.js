import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import {INIT_PLATE_STATES, END_PLATE_STATES, BOUNDARY_STATES, STATE_TEXT, backgroundForState, boundaryForState} from "../State";

ControlPanel.propTypes = {
    onClick: PropTypes.func,
    hide: PropTypes.bool,
    plateState: PropTypes.oneOf([...INIT_PLATE_STATES, ...END_PLATE_STATES]),
    boundaryState: PropTypes.oneOf([...BOUNDARY_STATES, ""])
}

function ControlPanel(props) {
    if (props.hide)
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
    return <Button
        key={type}
        onClick={() => onClick(type)}
        selected={plateState === type}>
        <img src={backgroundForState(type)}/>
        <p>{STATE_TEXT[type]}</p>
    </Button>;
}
function boundaryButtonOfType(boundaryState, type, onClick) {
    return <Button
        key={type}
        onClick={() => onClick(type)}
        selected={boundaryState === type}>
        <img src={boundaryForState(type)}/>
        <p>{STATE_TEXT[type]}</p>
    </Button>;
}

export default ControlPanel;