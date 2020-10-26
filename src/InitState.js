import React from "react";
import HalfInitState from "./components/HalfInitState";
import StartRestartButton from "./components/StartRestartButton";

function InitState() {
    return (
        <div className="InitState">
            <HalfInitState/>
            <HalfInitState/>
            <StartRestartButton/>
        </div>
    );
}

export default InitState;