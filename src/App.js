import React, {useState} from 'react';
import './App.css';
import Background from "./components/Background";
import TopText from "./components/TopText";
import ControlPanel from "./components/ControlPanel";
import {
    BOUNDARY_STATES,
    INIT_PLATE_STATES,
    TOP_TEXT,
    STATE_TEXT,
    SCREEN_STATES,
    examplesForState,
    REAL_EXAMPLES_TEXT,
    START_RESTART_BUTTON_TEXT
} from "./State";
import RealExamplePanel from "./components/RealExamplesPanel";
import Button from "./components/Button";

function App() {
    const [selectedExample, selectExample] = useState("");
    const [plateState, setPlateState] = useState(INIT_PLATE_STATES[0]);
    const [boundaryState, setBoundaryState] = useState("");
    const [screenState, setScreenState] = useState(SCREEN_STATES.realExampleSelection);
    const [topText, setTopText] = useState(TOP_TEXT.realExampleSelection);
    const [startRestartButtonText, setStartRestartButtonText] = useState(START_RESTART_BUTTON_TEXT.canStart);
    const [finishedRealExamples, setFinishedRealExamples] = useState([]);

    function onExampleButtonClicked(type) {
        selectExample(type);
        setTopText(`${TOP_TEXT.plateSelection} ${REAL_EXAMPLES_TEXT[type]}!`);
        setScreenState(SCREEN_STATES.plateSelection);
        setStartRestartButtonText(START_RESTART_BUTTON_TEXT.canStart);
        setPlateState(INIT_PLATE_STATES[0]);
        setBoundaryState("");
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
            setTopText(TOP_TEXT.canStart);
            setScreenState(SCREEN_STATES.canStart);
        }
    }
    function onStartRestartClicked() {
        switch (screenState) {
            case SCREEN_STATES.canStart:
                const endState = plateState + boundaryState;
                const correct = selectedExample === endState;
                const topTextPostfix = correct ? `${TOP_TEXT.canRestart} ${REAL_EXAMPLES_TEXT[selectedExample]}!` :
                    `${TOP_TEXT.canRetry} ${REAL_EXAMPLES_TEXT[selectedExample]}...`;

                setPlateState(endState);
                setTopText(`A ${STATE_TEXT[boundaryState]} with ${STATE_TEXT[plateState]} plates creates:
                ${STATE_TEXT[endState]}
                ${topTextPostfix}`);

                if (correct) {
                    setScreenState(SCREEN_STATES.canRestart);
                    setStartRestartButtonText(START_RESTART_BUTTON_TEXT.canRestart);
                    setFinishedRealExamples([endState, ...finishedRealExamples]);
                }
                else {
                    setScreenState(SCREEN_STATES.canRetry);
                    setStartRestartButtonText(START_RESTART_BUTTON_TEXT.canRetry);
                }
                break;
            case SCREEN_STATES.canRetry:
                onExampleButtonClicked(selectedExample);
                break;
            case SCREEN_STATES.canRestart:
                setPlateState(INIT_PLATE_STATES[0]);
                setBoundaryState("");
                setTopText(TOP_TEXT.realExampleSelection);
                setScreenState(SCREEN_STATES.realExampleSelection);
                setStartRestartButtonText(START_RESTART_BUTTON_TEXT.canStart);
                break;
            default:
                console.log("StartRestartButton clicked in invalid state");
        }
    }

    return (
        <div className="App">
            <TopText text={topText}/>
            <RealExamplePanel
                hide={screenState !== SCREEN_STATES.realExampleSelection}
                finishedRealExamples={finishedRealExamples}
                onClick={onExampleButtonClicked} />
            <Button
                hide={screenState === SCREEN_STATES.realExampleSelection}
                className="SelectedExample"
                disabled={true}
                background={examplesForState(selectedExample)}>
                <p>{REAL_EXAMPLES_TEXT[selectedExample]}</p>
            </Button>
            <ControlPanel
                hide={screenState !== SCREEN_STATES.plateSelection && screenState !== SCREEN_STATES.canStart}
                onClick={onControlButtonClicked}
                plateState={plateState}
                boundaryState={boundaryState}/>
            <Button
                hide={screenState === SCREEN_STATES.realExampleSelection || screenState === SCREEN_STATES.plateSelection}
                className="StartRestartButton"
                onClick={onStartRestartClicked}>
                <p>{startRestartButtonText}</p>
            </Button>
            <Background
                hide={screenState === SCREEN_STATES.realExampleSelection}
                plateState={plateState}
                boundaryState={boundaryState}/>
        </div>
    );
}

export default App;
