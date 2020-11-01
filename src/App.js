import React, {useState} from 'react';
import './App.css';
import HalfScreen from "./components/HalfScreen";
import StartRestartButton from "./components/StartRestartButton";
import TopText from "./components/TopText";

const PLATE_TYPES = ["left-plate", "right-plate"];
const VERTICAL_DIRECTIONS = ["up", "down"];
const HORIZONTAL_DIRECTIONS = ["left", "right"];
const END_STATE = { //co = continental-oceanic, oc = oceanic-continental, etc
    fault: { //cc
        text: "Fault"
    },
    rift: { //cc
        text: "Rift"
    },
    mountain: { //cc
        text: "Mountain",
        leftArc: "CenterUp",
        rightArc: "CenterUp"
    },
    coSubductionMountain: { //co
        text: "Subduction zone, mountains on land",
        rightArc: "CenterDown",
        leftArc: "SideUp"
    },
    ocSubductionMountain: { //oc
        text: "Subduction zone, mountains on land",
        leftArc: "CenterDown",
        rightArc: "SideUp"
    },
    tsunamis: { //oo
        text: "Tsunamis"
    },
    midOceanRidge: { //oo
        text: "Mid-ocean ridge",
        leftArc: "CenterDown",
        rightArc: "CenterDown"
    },
    subduction: { //oo
        text: "Subduction zone",
        leftArc: "CenterDown"
    },
    default: {
        text: "Who knows? We don't."
    }
};

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
                return END_STATE.fault; // transform
            else if (controlPanelState.left.direction === "left")
                return END_STATE.rift; // divergent
            else
                return END_STATE.mountain; // convergent
        }
        else {
            // continental-oceanic
            if (controlPanelState.left.direction === "up" || controlPanelState.left.direction === "down")
                return END_STATE.coSubductionMountain; // transform
            else if (controlPanelState.left.direction === "left")
                return END_STATE.default; // divergent
            else
                return END_STATE.coSubductionMountain; // convergent
        }
    }
    else {
        if (controlPanelState.right.plate === "left-plate") {
            // oceanic-continental
            if (controlPanelState.left.direction === "up" || controlPanelState.left.direction === "down")
                return END_STATE.ocSubductionMountain; // transform
            else if (controlPanelState.left.direction === "left")
                return END_STATE.default; // divergent
            else
                return END_STATE.ocSubductionMountain; // convergent
        }
        else {
            // oceanic-oceanic
            if (controlPanelState.left.direction === "up" || controlPanelState.left.direction === "down")
                return END_STATE.tsunamis; // transform
            else if (controlPanelState.left.direction === "left")
                return END_STATE.midOceanRidge; // divergent
            else
                return END_STATE.subduction; // convergent
        }
    }
}

function App() {
    const [canClickStartRestart, setCanClickStartRestart] = useState(false);
    const [clickedStart, setClickedStart] = useState(false);
    const [controlPanelState, setControlPanelState] = useState({left: {}, right: {}});
    const [plateState, setPlateState] = useState({});
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
            const newPlateState = plateBoundaryResult(controlPanelState);
            setPlateState(newPlateState);
            setTopText(`${newPlateState.text}\n` +
                "Click the restart button to try another combo!");
        }
    }

    return (
        <div className="App">
            <HalfScreen onClick={(clickedButton) => updateControlPanelState(controlPanelState, clickedButton, "left")}
                        controlPanelState={controlPanelState.left}
                        plateState={plateState}
                        leftPanel={true}/>
            <HalfScreen onClick={(clickedButton) => updateControlPanelState(controlPanelState, clickedButton, "right")}
                        controlPanelState={controlPanelState.right}
                        plateState={plateState}
                        leftPanel={false}/>
            <StartRestartButton onClick={onStartRestartClicked} disabled={!canClickStartRestart}/>
            <TopText text={topText}/>
        </div>
    );
}

export default App;
