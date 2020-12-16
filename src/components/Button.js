import React from "react";
import PropTypes from "prop-types";
import Check from "./backgrounds/check.svg";

Button.propTypes = {
    hide: PropTypes.bool,
    className: PropTypes.string,
    selected: PropTypes.bool,
    background: PropTypes.string,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    onClick: PropTypes.func
}

function Button(props) {
    if (props.hide)
        return null;
    return (
        <div className={`Button ${props.className}`}
             style={{backgroundImage: props.background ? `url(${props.background})` : null,
                    borderColor: props.selected ? "blue" : "lightyellow"}}
             onClick={props.disabled ? null : props.onClick}>
            {props.selected ? <div className="SelectedButton" /> : null}
            {props.checked ? <img src={Check}/> : null}
            {props.children}
        </div>
    );
}

export default Button;