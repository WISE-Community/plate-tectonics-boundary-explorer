import React, {Fragment} from "react";
import Plate from "./Plate";
import Mantle from "./Mantle";
import ControlPanel from "./ControlPanel";
import Sky from "./Sky";

function HalfInitState() {
    return (
        <Fragment>
            <div>
                <Sky/>
                <Plate/>
                <Mantle/>
            </div>
            <ControlPanel/>
        </Fragment>
    )
}

export default HalfInitState;