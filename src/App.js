import React, {useState} from 'react';
import './App.css';
import HalfScreen from "./components/HalfScreen";
import StartRestartButton from "./components/StartRestartButton";
import TopText from "./components/TopText";

const PLATE_TYPES = ["left-plate", "right-plate"];
const VERTICAL_DIRECTIONS = ["up", "down"];
const HORIZONTAL_DIRECTIONS = ["left", "right"];
const INIT_TOP_TEXT = "Choose a plate type and direction of movement to begin!";

/**
 * currentState = {
 *     left: {
 *         plate: "left-plate" or "right-plate",
 *         direction: "up", "down", "left", or "right",
 *         disabled: [] //array of values above
 *     },
 *     right: {} //similar
 * }
 */

// assume that left-plate = continental, right-plate = oceanic
function plateBoundaryResult(controlPanelState) {
    if (controlPanelState.left.plate === "left-plate") {
        if (controlPanelState.right.plate === "left-plate") {
            // continental-continental
            if (controlPanelState.left.direction === "up" || controlPanelState.left.direction === "down")
                return "Fault"; // transform
            else if (controlPanelState.left.direction === "left")
                return "Rift"; // divergent
            else
                return "Mountain"; // convergent
        }
        else {
            // continental-oceanic
            if (controlPanelState.left.direction === "up" || controlPanelState.left.direction === "down")
                return "Subduction zone, Mountains on land"; // transform
            else if (controlPanelState.left.direction === "left")
                return "Who knows? We don't."; // divergent
            else
                return "Subduction zone, mountains on land"; // convergent
        }
    }
    else {
        if (controlPanelState.right.plate === "left-plate") {
            // oceanic-continental
            if (controlPanelState.left.direction === "up" || controlPanelState.left.direction === "down")
                return "Subduction zone, mountains on land"; // transform
            else if (controlPanelState.left.direction === "left")
                return "Who knows? We don't"; // divergent
            else
                return "Subduction zone, mountains on land"; // convergent
        }
        else {
            // oceanic-oceanic
            if (controlPanelState.left.direction === "up" || controlPanelState.left.direction === "down")
                return "Tsunamis"; // transform
            else if (controlPanelState.left.direction === "left")
                return "Mid-ocean ridge"; // divergent
            else
                return "Subduction zone"; // convergent
        }
    }
}

function App() {
    const [canClickStartRestart, setCanClickStartRestart] = useState(false);
    const [clickedStart, setClickedStart] = useState(false);
    const [controlPanelState, setControlPanelState] = useState({left: {}, right: {}});
    const [topText, setTopText] = useState(INIT_TOP_TEXT);

    function updateControlPanelState(currentState, clickedButton, side) {
        let newState = {...currentState};
        if (PLATE_TYPES.includes(clickedButton))
            newState[side].plate = clickedButton;
        else {
            newState[side].direction = clickedButton;

            // disable moving both plates in the same direction or perpendicular directions
            const disabledDirections = VERTICAL_DIRECTIONS.includes(clickedButton) ?
                [...HORIZONTAL_DIRECTIONS, clickedButton] : [...VERTICAL_DIRECTIONS, clickedButton];
            if (side === "left")
                newState.right.disabled = disabledDirections;
            else
                newState.left.disabled = disabledDirections;
        }
        //allowed to start if plate type & directions defined for both panels
        if (newState.right.plate !== undefined && newState.right.direction !== undefined &&
            newState.left.plate !== undefined && newState.left.direction !== undefined)
            setCanClickStartRestart(true);
        setControlPanelState(newState);
    }

    function onStartRestartClicked() {
        // restart (we've clicked start, now we're clicking again)
        if (clickedStart) {
            setControlPanelState({left: {}, right: {}});
            setCanClickStartRestart(false);
            setClickedStart(false);
            setTopText(INIT_TOP_TEXT);
        }
        else {
            setClickedStart(true);
            setTopText(`${plateBoundaryResult(controlPanelState)}\n` +
                "Click the restart button to try another combo!");
        }
    }

    return (
        <div className="App">
            <HalfScreen onClick={(clickedButton) => updateControlPanelState(controlPanelState, clickedButton, "left")}
                        state={controlPanelState.left}/>
            <HalfScreen onClick={(clickedButton) => updateControlPanelState(controlPanelState, clickedButton, "right")}
                        state={controlPanelState.right}/>
            <StartRestartButton onClick={onStartRestartClicked} disabled={!canClickStartRestart}/>
            <TopText text={topText}/>
        </div>
    );
}

export default App;
