import React from "react";
import PropTypes from "prop-types";

Button.propTypes = {
    hide: PropTypes.bool,
    className: PropTypes.string,
    selected: PropTypes.bool,
    background: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
}

function Button(props) {
    if (props.hide)
        return null;
    return (
        <div className={`Button ${props.className}`}
             style={{backgroundImage: props.background ? `url(${props.background})` : null}}
             onClick={props.disabled ? null : props.onClick}>{props.children}</div>
    );
}

export default Button;