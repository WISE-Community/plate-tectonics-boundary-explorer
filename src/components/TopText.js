import React from "react";
import PropTypes from "prop-types";

TopText.propTypes = {
    hide: PropTypes.bool,
    text: PropTypes.string
}

function TopText(props) {
    if (props.hide)
        return null;

    return (
        <h1 className="TopText">{props.text}</h1>
    );
}

export default TopText;