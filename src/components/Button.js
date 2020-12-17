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
    onClick: PropTypes.func,
    style: PropTypes.object
}

function Button(props) {
    if (props.hide)
        return null;
    const style = props.style ? props.style : null;
    return (
        <div className={`Button ${props.className}`}
             style={{backgroundImage: props.background ? `url(${props.background})` : null,
                    borderColor: props.selected ? "blue" : "lightyellow",
                    ...style}}
             onClick={props.disabled ? null : props.onClick}>
            {props.selected ? <div className="SelectedButton" /> : null}
            {props.checked ? <img className="CheckInButton" src={Check}/> : null}
            {props.children}
        </div>
    );
}

export default Button;