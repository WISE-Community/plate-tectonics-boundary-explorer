import React from "react";
import PropTypes from "prop-types";

TopText.propTypes = {
    text: PropTypes.string
}

function TopText(props) {
    return (
        <h1 className="TopText">{props.text}</h1>
    );
}

export default TopText;