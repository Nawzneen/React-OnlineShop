import "./App.css";
import React from "react";

function App() {
  const [gameRunning, setGameRunning] = React.useState(false);
  function toggleGame() {
    setGameRunning(!gameRunning);
    console.log("gameRuning", gameRunning);
  }
  return (
    <div className="App">
      <button onClick={toggleGame}>{gameRunning ? "Pause" : "Start"}</button>
    </div>
  );
}

export default App;
