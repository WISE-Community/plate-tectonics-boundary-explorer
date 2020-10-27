import React from "react";
import PropTypes from "prop-types";

StartRestartButton.propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}

function StartRestartButton(props) {
    return (
        <button className="StartRestartButton" onClick={props.onClick} disabled={props.disabled}/>
    );
}

export default StartRestartButton;