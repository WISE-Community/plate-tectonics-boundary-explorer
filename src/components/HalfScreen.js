import React from "react";
import Plate from "./Plate";
import Mantle from "./Mantle";
import ControlPanel from "./ControlPanel";
import Sky from "./Sky";

function HalfScreen() {
    return (
        <div className="HalfScreen">
            <Sky/>
            <Plate/>
            <Mantle/>
            <ControlPanel/>
        </div>
    )
}

export default HalfScreen;