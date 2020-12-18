import React, {useState, useEffect} from 'react';
import './App.css';
import Background from "./components/Background";
import TopText from "./components/TopText";
import ControlPanel from "./components/ControlPanel";
import {
    BOUNDARY_STATES,
    INIT_PLATE_STATES,
    TOP_TEXT,
    AFTER_INPUT_TEXT,
    STATE_TEXT,
    SCREEN_STATES,
    examplesForState,
    REAL_EXAMPLES_TEXT,
    END_PLATE_STATES, splitEndState, MIN_INPUT_LENGTH
} from "./State";
import RealExamplePanel from "./components/RealExamplesPanel";
import Button from "./components/Button";
import Home from "./components/backgrounds/home.svg";
import Retry from "./components/backgrounds/retry.svg";
import Start from "./components/backgrounds/start.svg";
import WorldMap from "./components/WorldMap";

function App() {
    const [hoveringOverExample, setHoverExample] = useState("");
    const [hoverCoordinates, setHoverCoordinates] = useState([0, 0]);
    const [selectedExample, selectExample] = useState("");
    const [plateState, setPlateState] = useState("");
    const [boundaryState, setBoundaryState] = useState("");
    const [screenState, setScreenState] = useState(SCREEN_STATES.realExampleSelection);
    const [topText, setTopText] = useState(TOP_TEXT.realExampleSelection);
    const [afterInputText, setAfterInputText] = useState("");
    const [input, setInput] = useState("");
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
        setTopText(<React.Fragment>{TOP_TEXT.plateSelection} {REAL_EXAMPLES_TEXT[type]}!</React.Fragment>);
        setAfterInputText("");
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
            setAfterInputText(AFTER_INPUT_TEXT.canStart);
            setScreenState(SCREEN_STATES.canStart);
        }
    }
    function onStartRetryClicked() {
        switch (screenState) {
            case SCREEN_STATES.canStart:
                if (input.split(' ').length < MIN_INPUT_LENGTH) {
                    //prompt for more text
                    setTopText(
                    <React.Fragment>
                        Remember to <span style={{color: "#D32F2F"}}>{TOP_TEXT.canStart}</span>
                    </React.Fragment>);
                    return;
                }

                const endState = plateState + boundaryState;
                const correct = selectedExample === endState;
                let topTextPostfix;

                if (correct) {
                    topTextPostfix = `${TOP_TEXT.canRestart} ${REAL_EXAMPLES_TEXT[selectedExample]}!`;
                    setScreenState(SCREEN_STATES.canRestart);
                    setFinishedRealExamples([endState, ...finishedRealExamples]);
                }
                else {
                    //tell user what parts they got right
                    const [selectedPlateType, selectedBoundaryType] = splitEndState(selectedExample);
                    topTextPostfix = (
                    <React.Fragment>
                        {TOP_TEXT.canRetry} {REAL_EXAMPLES_TEXT[selectedExample]}... <br/>
                        {selectedPlateType === plateState ?
                            <React.Fragment>
                                But you were right about the <span style={{color: "#D32F2F"}}>{STATE_TEXT[plateState]}</span> plates!
                                <br/>
                            </React.Fragment> : null}
                        {selectedBoundaryType === boundaryState ?
                            <React.Fragment>
                                But you were right about the <span style={{color: "#D32F2F"}}>{STATE_TEXT[boundaryState]}</span>!
                                <br/>
                            </React.Fragment>: null}
                        Click the Retry button to try again!
                    </React.Fragment>);
                    setScreenState(SCREEN_STATES.canRetry);
                }

                setPlateState(endState);
                setTopText(
                <React.Fragment>
                    A
                    <span style={{color: "#D32F2F"}}> {STATE_TEXT[boundaryState]} </span>
                    with
                    <span style={{color: "#D32F2F"}}> {STATE_TEXT[plateState]} </span>
                    plates creates: <br/>
                    {STATE_TEXT[endState]} <br/>
                    {topTextPostfix}
                </React.Fragment>);
                setInput("");
                setAfterInputText("");
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
        setAfterInputText("");
        setInput("");
        setScreenState(SCREEN_STATES.realExampleSelection);
    }

    let startRetryButton = null;
    if (screenState === SCREEN_STATES.canStart)
        startRetryButton = Start;
    else if (screenState === SCREEN_STATES.canRetry)
        startRetryButton = Retry;

    return (
        <div className="App">
            <TopText
                text={topText}
                afterInputText={afterInputText}
                onInputChanged={event => setInput(event.target.value)}/>
            <RealExamplePanel
                hide={screenState !== SCREEN_STATES.realExampleSelection}
                finishedRealExamples={finishedRealExamples}
                hoverCoordinates={hoverCoordinates}
                hoverExample={hoveringOverExample} />
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
            <WorldMap
                hide={screenState !== SCREEN_STATES.realExampleSelection}
                onHover={(event, example) => {
                    setHoverExample(example);
                    setHoverCoordinates([event.clientX, event.clientY]);
                }}
                endHover={() => setHoverExample("")}
                onClick={onExampleButtonClicked}/>
        </div>
    );
}

export default App;
