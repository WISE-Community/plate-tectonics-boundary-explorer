import React from "react";
import PropTypes from "prop-types";

PlateTypeButton.propTypes = {
    orientation: PropTypes.oneOf(["left-plate", "right-plate"]),
    selected: PropTypes.bool,
    onClick: PropTypes.func
}

function PlateTypeButton(props) {
    return (
        <div className="PlateTypeButton"
             style={{gridArea: props.orientation,
                backgroundColor: props.selected ? "mediumaquamarine" : "aquamarine"}}
             onClick={props.onClick}/>
    );
}

export default PlateTypeButton;