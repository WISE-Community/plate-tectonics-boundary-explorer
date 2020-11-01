import React from "react";
import PropTypes from "prop-types";
import PlateTypeButton from "./PlateTypeButton";
import ArrowButton from "./ArrowButton";

ControlPanel.propTypes = {
    onClick: PropTypes.func,
    state: PropTypes.object
}

function ControlPanel(props) {
    return (
        <div className="ControlPanel">
            <PlateTypeButton orientation={"left-plate"} onClick={() => props.onClick("left-plate")}
                    selected={props.state.plate === "left-plate"}/>
            <PlateTypeButton orientation={"right-plate"} onClick={() => props.onClick("right-plate")}
                    selected={props.state.plate === "right-plate"}/>
            <div className="ArrowButtonContainer">
                <ArrowButton orientation={"up"} onClick={() => props.onClick("up")}
                    disabled={props.state.disabled?.includes("up")}
                    selected={props.state.direction === "up"}/>
                <ArrowButton orientation={"left"} onClick={() => props.onClick("left")}
                    disabled={props.state.disabled?.includes("left")}
                    selected={props.state.direction === "left"}/>
                <ArrowButton orientation={"right"} onClick={() => props.onClick("right")}
                    disabled={props.state.disabled?.includes("right")}
                    selected={props.state.direction === "right"}/>
                <ArrowButton orientation={"down"} onClick={() => props.onClick("down")}
                    disabled={props.state.disabled?.includes("down")}
                    selected={props.state.direction === "down"}/>
            </div>
        </div>
    );
}

export default ControlPanel;