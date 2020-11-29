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
        <div className="TopText">
            <h1>{` ${props.text} `}</h1>
        </div>
    );
}

export default TopText;