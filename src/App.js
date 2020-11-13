import React, {useState} from 'react';
import './App.css';
import Background from "./components/Background";
import TopText from "./components/TopText";
import ControlPanel from "./components/ControlPanel";
import {BOUNDARY_STATES, INIT_PLATE_STATES, INIT_TOP_TEXT, END_PLATE_STATES, STATE_TEXT} from "./State";

function App() {
    const [plateState, setPlateState] = useState(INIT_PLATE_STATES[0]);
    const [boundaryState, setBoundaryState] = useState("");
    const [topText, setTopText] = useState(INIT_TOP_TEXT);

    function onButtonClicked(type) {
        let newBoundaryState = boundaryState;
        if (INIT_PLATE_STATES.includes(type))
            setPlateState(type);
        else if (BOUNDARY_STATES.includes(type)) {
            newBoundaryState = type;
            setBoundaryState(type);
        }

        //can start
        if (newBoundaryState !== "") {
            const newPlateState = plateState + newBoundaryState;
            setPlateState(plateState + newBoundaryState);
            setTopText(STATE_TEXT[newPlateState]);
        }
    }
    function onRestartClicked() {
        setPlateState(INIT_PLATE_STATES[0]);
        setBoundaryState("");
        setTopText(INIT_TOP_TEXT);
    }

    return (
        <div className="App">
            <TopText text={topText}/>
            <ControlPanel onClick={onButtonClicked} plateState={plateState} boundaryState={boundaryState}/>
            {END_PLATE_STATES.includes(plateState) ?
                <button className="RestartButton" onClick={onRestartClicked}>Restart</button> : null}
            <Background plateState={plateState}/>
        </div>
    );
}

export default App;
