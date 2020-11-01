import React from "react";
import PropTypes from "prop-types";
import "../App.css";

Plate.propTypes = {
    leftPanel: PropTypes.bool
}

function Plate(props) {
    const panel = props.leftPanel ? "Left" : "Right";
    return (
        <div className="Plate">
            <div className={`PlateColor PlateColor${panel}`}/>
            {props.children}
        </div>
    );
}

export default Plate;