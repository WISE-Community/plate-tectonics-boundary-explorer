import React from "react";

function PlateTypeButton(props) {
    return (
        <div className="PlateTypeButton" style={{gridArea: props.orientation}}></div>
    );
}

export default PlateTypeButton;