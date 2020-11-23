import React, {useState} from 'react';
import './App.css';
import Background from "./components/Background";
import TopText from "./components/TopText";
import ControlPanel from "./components/ControlPanel";
import {
    BOUNDARY_STATES,
    INIT_PLATE_STATES,
    INIT_TOP_TEXT,
    END_PLATE_STATES,
    STATE_TEXT,
    SCREEN_STATES,
    examplesForState, REAL_EXAMPLES_TEXT
} from "./State";
import RealExamplePanel from "./components/RealExamplesPanel";
import Button from "./components/Button";

function App() {
    const [selectedExample, selectExample] = useState("");
    const [plateState, setPlateState] = useState(INIT_PLATE_STATES[0]);
    const [boundaryState, setBoundaryState] = useState("");
    const [screenState, setScreenState] = useState(SCREEN_STATES.realExampleSelection);
    const [topText, setTopText] = useState(INIT_TOP_TEXT);

    function onExampleButtonClicked(type) {
        selectExample(type);
        setTopText(`${INIT_TOP_TEXT} ${REAL_EXAMPLES_TEXT[type]}!`);
        setScreenState(SCREEN_STATES.plateSelection);
    }
    function onControlButtonClicked(type) {
        let newBoundaryState = boundaryState;
        if (INIT_PLATE_STATES.includes(type))
            setPlateState(type);
        else if (BOUNDARY_STATES.includes(type)) {
            newBoundaryState = type;
            setBoundaryState(type);
        }

        //can start
        if (newBoundaryState !== "") {
            setTopText("Let's begin!");
            setScreenState(SCREEN_STATES.canStart);
        }
    }
    function onStartClicked() {
        setPlateState(plateState + boundaryState);
        setTopText(STATE_TEXT[plateState + boundaryState]);
        setScreenState(SCREEN_STATES.canRestart);
    }
    function onRestartClicked() {
        setPlateState(INIT_PLATE_STATES[0]);
        setBoundaryState("");
        setTopText(INIT_TOP_TEXT);
        setScreenState(SCREEN_STATES.realExampleSelection);
    }

    return (
        <div className="App">
            <RealExamplePanel
                hide={screenState !== SCREEN_STATES.realExampleSelection}
                onClick={onExampleButtonClicked} />
            <TopText
                hide={screenState === SCREEN_STATES.realExampleSelection}
                text={topText}/>
            <Button
                hide={screenState === SCREEN_STATES.realExampleSelection}
                className="SelectedExample"
                disabled={true}
                background={examplesForState(selectedExample)}>
                {REAL_EXAMPLES_TEXT[selectedExample]}
            </Button>
            <ControlPanel
                hide={screenState !== SCREEN_STATES.plateSelection && screenState !== SCREEN_STATES.canStart}
                onClick={onControlButtonClicked}
                plateState={plateState}
                boundaryState={boundaryState}/>
            <Button
                hide={screenState !== SCREEN_STATES.canStart}
                className="StartRestartButton"
                onClick={onStartClicked}>
                Start
            </Button>
            <Button
                hide={screenState !== SCREEN_STATES.canRestart}
                className="StartRestartButton"
                onClick={onRestartClicked}>
                Restart
            </Button>
            <Background
                hide={screenState === SCREEN_STATES.realExampleSelection}
                plateState={plateState}/>
        </div>
    );
}

export default App;
