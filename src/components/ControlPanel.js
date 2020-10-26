import React from "react";
import PlateTypeButton from "./PlateTypeButton";
import ArrowButton from "./ArrowButton";

function ControlPanel() {
    return (
        <div className="ControlPanel">
            <PlateTypeButton/>
            <PlateTypeButton/>
            <div className="ArrowButtonContainer">
                <ArrowButton orientation={"up"}/>
                <ArrowButton orientation={"left"}/>
                <ArrowButton orientation={"right"}/>
                <ArrowButton orientation={"down"}/>
            </div>
        </div>
    );
}

export default ControlPanel;