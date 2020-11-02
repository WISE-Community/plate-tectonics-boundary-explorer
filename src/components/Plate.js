import React from "react";
import PropTypes from "prop-types";
import "../App.css";

Plate.propTypes = {
    leftPanel: PropTypes.bool,
    continental: PropTypes.bool
}

function Plate(props) {
    const panel = props.leftPanel ? "Left" : "Right";
    const plateType = props.continental ? "PlateLand" : "PlateUnderOcean";
    return (
        <div className="Plate">
            <div className={`PlateOcean Plate${panel}`} hidden={props.continental}/>
            <div className={`${plateType} Plate${panel}`}/>
            {props.children}
        </div>
    );
}

export default Plate;