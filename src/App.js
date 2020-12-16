import React, {useState, useEffect} from 'react';
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
    START_RESTART_BUTTON_TEXT, END_PLATE_STATES
} from "./State";
import RealExamplePanel from "./components/RealExamplesPanel";
import Button from "./components/Button";
import Home from "./components/backgrounds/home.svg";
import Retry from "./components/backgrounds/retry.svg";
import Start from "./components/backgrounds/start.svg";

function App() {
    const [selectedExample, selectExample] = useState("");
    const [plateState, setPlateState] = useState("");
    const [boundaryState, setBoundaryState] = useState("");
    const [screenState, setScreenState] = useState(SCREEN_STATES.realExampleSelection);
    const [topText, setTopText] = useState(TOP_TEXT.realExampleSelection);
    const [finishedRealExamples, setFinishedRealExamples] = useState([]);
    const [animationFrame, setAnimationFrame] = useState(1);

    useEffect(() => {
       if (!END_PLATE_STATES.includes(plateState)) //start countdown when results are showing
           return;
       if (animationFrame !== 4)
            setTimeout(() => setAnimationFrame(animationFrame + 1), 500);
    });

    function onExampleButtonClicked(type) {
        selectExample(type);
        setTopText(`${TOP_TEXT.plateSelection} ${REAL_EXAMPLES_TEXT[type]}!`);
        setScreenState(SCREEN_STATES.plateSelection);
        setPlateState("");
        setBoundaryState("");
    }
    function onControlButtonClicked(type) {
        let canStart;
        if (INIT_PLATE_STATES.includes(type)) {
            setPlateState(type);
            canStart = boundaryState !== "";
        }
        else if (BOUNDARY_STATES.includes(type)) {
            setBoundaryState(type);
            canStart = plateState !== "";
        }

        //can start
        if (canStart) {
            setTopText(TOP_TEXT.canStart);
            setScreenState(SCREEN_STATES.canStart);
        }
    }
    function onStartRetryClicked() {
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
                    setFinishedRealExamples([endState, ...finishedRealExamples]);
                }
                else {
                    setScreenState(SCREEN_STATES.canRetry);
                }
                break;
            case SCREEN_STATES.canRetry:
                onExampleButtonClicked(selectedExample);
                break;
            default:
                console.log("StartRestartButton clicked in invalid state");
        }
        setAnimationFrame(1);
    }
    function onRestartClicked() {
        setPlateState("");
        setBoundaryState("");
        setTopText(TOP_TEXT.realExampleSelection);
        setScreenState(SCREEN_STATES.realExampleSelection);
    }

    let startRetryButton = null;
    if (screenState === SCREEN_STATES.canStart)
        startRetryButton = Start;
    else if (screenState === SCREEN_STATES.canRetry)
        startRetryButton = Retry;

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
            <div className="ControlButtons" hidden={screenState === SCREEN_STATES.realExampleSelection}>
                <img src={Home} onClick={onRestartClicked}/>
                <img src={startRetryButton} onClick={onStartRetryClicked} hidden={screenState === SCREEN_STATES.canRestart}/>
            </div>
            <Background
                hide={screenState === SCREEN_STATES.realExampleSelection}
                plateState={plateState}
                boundaryState={boundaryState}
                frame={animationFrame}/>
        </div>
    );
}

export default App;
