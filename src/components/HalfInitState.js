import React from "react";
import Plate from "./Plate";
import Mantle from "./Mantle";
import ControlPanel from "./ControlPanel";
import Sky from "./Sky";

function HalfInitState() {
    return (
        <div className="HalfInitState">
            <Sky/>
            <Plate/>
            <Mantle/>
            <ControlPanel/>
        </div>
    )
}

export default HalfInitState;