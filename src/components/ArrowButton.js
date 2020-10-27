import React from "react";
import PropTypes from "prop-types";

ArrowButton.propTypes = {
    orientation: PropTypes.oneOf(["up", "down", "left", "right"]),
    disabled: PropTypes.bool,
    selected: PropTypes.bool,
    onClick: PropTypes.func
}

function ArrowButton(props) {
    return (
        <button className="ArrowButton"
                style={{gridArea: props.orientation,
                    backgroundColor: props.selected ? "yellow" : "lightyellow"}}
                disabled={props.disabled}
                onClick={props.onClick}/>
    );
}

export default ArrowButton;