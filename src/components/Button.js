import React from "react";
import PropTypes from "prop-types";

Button.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
}

function Button(props) {
    return (
        <div className="Button"
             style={{backgroundColor: props.selected ? "mediumaquamarine" : "aquamarine"}}
             onClick={props.onClick}>{props.children}</div>
    );
}

export default Button;