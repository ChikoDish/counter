import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [timer, setTimer] = useState(0);
  const [isActive, setActive] = useState(false);
  const [btnText, setbtnText] = useState("Start");

  useEffect(() => {
    const interval = setInterval(() => {
      if (isActive) {
        setTimer(timer + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, isActive]);

  const startTimer = () => {
    if (timer === 0) setTimer(1);
    if (isActive) {
      setbtnText("Start");
    } else {
      setbtnText("Stop");
    }
    setActive(!isActive);
  };

  const reset = () => {
    setTimer(0);
    setActive(false);
  };

  return (
    <div className="App">
      <h1>{timer}</h1>
      <span
        className="start action-button shadow animate blue"
        onClick={startTimer}
      >
        {btnText}
      </span>
      <span className="reset action-button shadow animate red" onClick={reset}>
        Reset
      </span>
    </div>
  );
}

export default App;
