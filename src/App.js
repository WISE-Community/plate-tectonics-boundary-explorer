import React, {useState} from 'react';
import './App.css';
import HalfScreen from "./components/HalfScreen";
import StartRestartButton from "./components/StartRestartButton";
import TopText from "./components/TopText";

function App() {
    const [clickedStart, changeStart] = useState(false);

    return (
        <div className="App">
            <HalfScreen/>
            <HalfScreen/>
            <StartRestartButton onClick={() => changeStart(!clickedStart)}/>
            <TopText text={clickedStart ? "Want to restart? Click it again!" : "Try clicking the start button!"}/>
        </div>
    );
}

export default App;
