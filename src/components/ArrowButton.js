import React from "react";

function ArrowButton(props) {
    return (
        <div className="ArrowButton" style={{gridArea: props.orientation}}/>
    );
}

export default ArrowButton;